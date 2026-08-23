import styled from "styled-components";

export const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Header = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    border-bottom: 1px solid var(--line)
`;

export const SignOutButton = styled.a`
    background: var(--bg);
    color: var(--accent);
    font-family: "Archivo Black","Archivo",sans-serif;
    min-width: 65px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const SignOutContainer = styled.div`
    display: flex;
    flex: 1 0 500%;
    justify-content: end;
    align-items: baseline;
    align-content: space-between;
    gap: 10px;
    max-width: 250px;
`;
export const SectionBreak = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;
    color: var(--dim);
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
`;
export const Line = styled.div`
    height: 1px;
    background: var(--line);
    flex: 1;
`;
export const CreateRoomButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
`;