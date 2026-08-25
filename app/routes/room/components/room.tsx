import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import type { Route } from '../../../+types/root';
import { useNavigate } from 'react-router';
import { addMessage, gameOver, gameRestarted, gameStarted, gameWaiting, leave, playerConnected, playerDisconnected, playerLied, playerReady, playerRenamed, playerVoted, roundOver, setAnswer, setRoomState, votingStarted} from '~/redux/room';
import styled from 'styled-components';
import Header from './header/header';
import Chat from './chat/chat';
import Game from './game/game';
import Roaster from './roaster/roaster';
import { GameWrapper, Outer } from './styles';
import { toast } from 'react-toastify';
import { RoomErrorToast } from '~/components/room_error_toast/room_error_toast';
import { AppConfig } from '~/config';
import { ErrorContainer } from '~/routes/auth/components/error_container/error_container';
import { ErrorToast } from '~/components/error_toast/error_toast';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Room" },
    { name: "description", content: "Welcom to game" },
  ];
}

export default function RoomPage() {
  const socketRef = useRef<WebSocket|null>(null);
  const room = useAppSelector(state => state.room);
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 1. Create the WebSocket instance using secure wss://
    socketRef.current = new WebSocket(`${AppConfig.baseWsURL}/api/v1/rooms/connect`);

    // 2. Handle incoming messages
    socketRef.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      console.log(newMessage);
      switch (newMessage.type) {
        case "room_state":
          dispatch(setRoomState(newMessage.payload));
          break;
        case "game_waiting": 
          dispatch(gameWaiting(newMessage.payload))
          break;
        case "player_ready":
          dispatch(playerReady(newMessage.payload))
          break;
        case "game_started": 
          dispatch(gameStarted(newMessage.payload))
          break;
        case "player_lied": 
          dispatch(playerLied(newMessage.payload))
          break;
        case "voting_started": 
          dispatch(votingStarted(newMessage.payload))
          break;
        case "player_voted": 
          dispatch(playerVoted(newMessage.payload))
          break;
        case "round_over": 
          dispatch(roundOver(newMessage.payload))
          break;
        case "game_over": 
          dispatch(gameOver(newMessage.payload))
          break;
        case "message_sent":
          dispatch(addMessage(newMessage.payload))
          break;
        case "player_connected":
          dispatch(playerConnected(newMessage.payload))
          break;
        case "player_disconnected":
          dispatch(playerDisconnected(newMessage.payload))
          break;
        case "player_renamed":
          dispatch(playerRenamed(newMessage.payload))
          break;
        case "game_restarted":
          dispatch(gameRestarted())
          break;
        case "error":
          if (newMessage.payload?.message === 'room not exists') {
            toast(RoomErrorToast, {
              autoClose: false,
              customProgressBar: true
            })
            break;
          }
          toast(ErrorToast, {
              data: {
                error: newMessage.payload?.message,
              },
              autoClose: 3000,
            })
          break;
      }
    };

    socketRef.current.onopen = () => {
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        const payload = { code: room.room.code, token: room.token };
        socketRef.current.send(JSON.stringify(payload));
      }
    }

    // 3. Handle errors
    socketRef.current.onerror = (error) => {
      console.error('WebSocket error observed:', error);
    };

    // 4. Cleanup connection on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);
  useEffect(() => {
        if (room.token == null) {
            nav("/")
        }
    }, [room.token])

  const leaveRoom = () => {
    if (socketRef.current) {
        socketRef.current.close();
      }
        dispatch(leave());
  }

  const sendAction = (type: string, msg: string|null = null) => {
    // Send payload if connection is open
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      const payload = msg;
      socketRef.current.send(JSON.stringify({type: type, payload: payload}));
      if (type == "lie") {
        dispatch(setAnswer(msg))
      }
    }
  };

  const sendMessage = (msg: string) => {
    if (!msg.trim()) return;
    sendAction("send_message", msg.trim());
  };

  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    const endsIn = room.room.phase_ends_in_ms;
    if (endsIn == null) {
      setTimeLeft(0);
      return;
    }
    const timeEnd = Date.now() + endsIn;
    let id: ReturnType<typeof setInterval>;
    const tick = () => {
      const left = Math.max(0, Math.ceil((timeEnd - Date.now()) / 1000));
      setTimeLeft(left);
      if (left === 0) clearInterval(id);
    };
    tick();
    id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [room.room.phase_ends_in_ms, room.room.state, room.room.round])

  return (
    <Outer>
      <Header 
        code={room.room.code} 
        state={room.room.state}
        round={room.room.round} 
        max_rounds={room.room.max_rounds} 
        seconds_left={timeLeft} 
        onLeave={leaveRoom}
      />
      <GameWrapper>
      <Roaster state={room.room.state} nickname={room.room.nickname} players={room.room.players}></Roaster>
      <Game room={room.room} onSendAction={sendAction}></Game>
      <Chat messages={room.room.messages} onMessageSent={sendMessage}></Chat>
      </GameWrapper>
    </Outer>
  );
}