import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: var(--bg);
    border: 1px solid var(--line);
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    padding: 11px;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1000px) {
        padding: 22px 48px;
        border-bottom: 1px solid var(--line);
    }
`

export const HeaderItem = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
`

export const FormContainer = styled.div`
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    @media (min-width: 1000px) {
        padding: 0;
        flex-direction: row;
    }
`

export const InputsContainer = styled.div`
    height: 100%;
    flex: 0 1;
    padding: 11px 22px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    border-right: 1px solid var(--line);
    @media (min-width: 1000px) {
        flex: 1;
        padding: 48px;
        height: 100%;
        gap: 24px;
    }
`

export const Title = styled.div`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 44px;
    line-height: 0.9;
    letter-spacing: -0.035em;
    @media (min-width: 1000px) {
        font-size: 64px;
    }
`

export const Subtitle = styled.div`
    font-size: 17px;
    line-height: 1.45;
    color: var(--dim);
    max-width: 460px;
    margin-top: -6px;
    @media (min-width: 1000px) {
        margin-top: 0;
        font-size: 15px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const InputTitle = styled.div<{ $warn: boolean }>`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${props => props.$warn ? "var(--accent)" : "var(--dim)"}
`

export const InputDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(--dim);
`

export const InputDescriptionItem = styled.div<{ $warn: boolean }>`
    color: ${props => props.$warn ? "var(--accent)" : "inherit"}
`

export const QuestionInput = styled.textarea`
    resize: none;
    background: transparent;
    border: 2px solid var(--ink);
    padding: 11px;
    font-size: 22px;
    line-height: 1.3;
    min-height: 60px;
    caret-color: var(--accent); 
    &:focus {
        outline-color: var(--accent);
    }
    @media (min-width: 1000px) {
        min-height: 96px;
        padding: 18px;
    }
`

export const AnswerInput = styled.input`
    background: transparent;
    border: 1px solid var(--line);
    padding: 11px;
    font-size: 22px;
    line-height: 1.3;
    caret-color: var(--accent); 
    &:focus {
        outline-color: var(--accent);
    }
    @media (min-width: 1000px) {
        padding: 18px;
    }
`

export const SideContainer = styled.div`
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    padding: 11px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 11px;
    @media (min-width: 1000px) {
        flex: 0 1 max(30%, 420px);
        gap: 22px;
        padding: 48px;
        background: var(--panel);
        width: 35%;
    }
`

export const SelectsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1000px) {
        gap: 22px;
    }
`

export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const SubmitButton= styled.button`
    cursor: pointer;
    border: 0;
    background: var(--accent);
    color: var(--accent-ink);
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 26px;
    text-align: center;
    padding: 22px;
    &:hover {
        background: transparent;
        color: var(--accent);
        border: 2px solid var(--accent); 
    }
`

export const ButtonDescription = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    color: var(--dim);
`