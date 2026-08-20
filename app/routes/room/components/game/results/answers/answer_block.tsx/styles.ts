import styled from "styled-components"

export const Container = styled.div`
    border: 1px solid var(--line);
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`

export const TitleBlock = styled.div`
    font-size: 17px;
`

export const SubtitleBlock = styled.div`
    font-family: ui-monospace,monospace;
    font-size: 11px;
    color: var(--dim);
    margin-top: 4px;
`

export const ScoreBlock = styled.div<{ $positive: boolean }>`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 22px;
    color: ${props => props.$positive ? 'var(--accent)' : 'var(--dim)'};
`