import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid var(--line);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: var(--bg);
    @media (min-width: 1000px) {  
        border-right: 1px solid var(--line);
        border-bottom: none;
    }
`;

export const Footer = styled.div`
    margin-top: auto;
    display: none;
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(--dim);
    line-height: 1.6;
    @media (min-width: 1000px) {  
        display: block;
    }
`;
export const PlayersList = styled.div`
    display: flex;
    gap: 8px;
    padding: 5px 0;
    background: var(--bg);
    flex-wrap: wrap;
    @media (min-width: 1000px) {  
        padding: 0;  
        flex-direction: column;
        border-bottom: 0;
        flex-wrap: no-wrap;
    }
`;