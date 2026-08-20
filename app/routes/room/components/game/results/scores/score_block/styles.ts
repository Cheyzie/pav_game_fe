import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-top: 1px solid var(--line);
`

export const NicknameBlock = styled.div`
    font-size: 19px;
    font-weight: 700;
`

export const ScoresContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: baseline;
`

export const ScoresDiff = styled.div<{ $positive: boolean }>`
    font-family: ui-monospace,monospace;
    font-size: 12px;
    color: ${props => props.$positive ? 'var(--accent)' : 'var(--dim)'};
`

export const TotalScore = styled.div`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 20px;
    font-variant-numeric: tabular-nums;
`
