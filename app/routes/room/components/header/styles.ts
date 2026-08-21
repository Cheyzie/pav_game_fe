import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const HeaderData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const StateBlock = styled.div<{$warn: boolean}>`
    color: var(${props => props.$warn ? '--accent' : '--dim'});
    display: flex;
    justify-content: end;
    gap: 10px;
    align-items: center;
    flex: 0 1 70%;
    padding: 10px;
    @media (min-width: 1000px) {    
        padding: 20px;
    }
`;
export const StateItem = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    @media (min-width: 1000px) { 
        font-size: 12px;
    }
`;
export const Timer = styled.div<{$warn: boolean}>`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 22px;
    font-variant-numeric: tabular-nums;
    color: var(${props => props.$warn ? '--accent' : '--ink'});
    @media (min-width: 1000px) { 
        font-size: 44px;
    }
`;
export const CodeBlock = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex: 0 1 30%;
    padding: 0 10px;
    gap: 10px;
    @media (min-width: 1000px) {    
        padding: 0 20px;
    }
`;
export const Code = styled.div`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 22px;
    letter-spacing: 0.16em;
    @media (min-width: 1000px) { 
        font-size: 30px;
    }
`;
export const CopyButton = styled.button`
    height: 100%;
    font-family: ui-monospace,monospace;
    font-size: 10px;
    border: 1px solid var(--line);
    background-color: var(--bg);
    padding: 5px 8px;
    color: var(--dim);
    cursor: pointer;
    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    @media (min-width: 1000px) { 
        font-size: 11px;
    }  
`;
export const TimerBar = styled.div`
    width: 100%;
    height: 6px;
    background: var(--line);
    flex-wrap: nowrap;
`;
export const TimerBarFiller = styled.div<{$left: number, $warn: boolean}>`
    width: ${props => props.$left}%;
    height: 6px;
    background: var(${props => props.$warn ? '--accent' : '--ink'});
    flex-wrap: nowrap;
    transition: width 1s linear;
`;
export const LeaveButton = styled.button`
    background: var(--bg);
    border: 1px solid var(--line);
    color: var(--dim);
    font-family: ui-monospace,monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 6px 10px;
    cursor: pointer;
    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    @media (min-width: 1000px) { 
        font-size: 11px;
    }
`;