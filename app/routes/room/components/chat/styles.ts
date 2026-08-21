import styled from "styled-components";

export const Container = styled.div`
    flex: 0 0 120px;
    border-top: 1px solid var(--line);
    background: var(--bg);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    @media (min-width: 1000px) {  
        border-left: 1px solid var(--line);
        border-top: none;
    }
`;

export const ChatLog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 15px;
    line-height: 1.4;
    flex: 1 1 0;
    overflow-y: scroll;
`;

export const FromLabel = styled.span`
    color: var(--accent);
    font-weight: 600;
`;

export const MessageText = styled.span`
    color: var(--dim);
`;

export const ChatInput = styled.input`
    background: var(--bg);
    border: 1px solid var(--line);
    padding: 12px 14px;
    display: flex;
    justify-content: space-between;
    color: var(--dim);
    font-size: 15px;
    &:focus {
        outline: 2px solid var(--accent);
    }
`;