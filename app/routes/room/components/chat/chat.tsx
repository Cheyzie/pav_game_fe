import { useEffect, useRef, useState } from "react";
import type { Message } from "~/types/message";
import { ChatInput, ChatLog, Container, FromLabel, MessageText } from "./styles";
import { ColumnHeader } from "../common/styles";

export default function Chat({ messages, onMessageSent }: { messages: Message[], onMessageSent: FunctionStringCallback}) {
    const [inputValue, setInputValue] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    const sendMessage = () => {
        onMessageSent(inputValue);
        setInputValue('');
    }
    return(<Container>
            <ColumnHeader>Chat</ColumnHeader>
            <ChatLog>
                {messages?.map((msg) => <div><FromLabel style={{color: "var(--accent)"}}>{msg.from}</FromLabel> <MessageText>{msg.message}</MessageText></div>)}
                <div ref={bottomRef} />
            </ChatLog>
            <ChatInput 
                onKeyUp={(e) => {(e.key === 'Enter') && sendMessage()}} 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Say something…"
                />
    </Container>);
} 