import styled from "styled-components"

export const Container = styled.div<{$position: number, $connected: boolean}>`
    border: ${props => props.$position == 1 ? '2px solid var(--accent)': '1px solid var(--line)'};
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    opacity: ${props => props.$connected ? 1: 0.45}
`

export const PositionBlock = styled.div<{$position: number}>`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: ${props => props.$position == 1 ? '30px': '14px'};
    color: ${props => props.$position == 1 ? 'var(--accent)': 'var(--dim)'};
`

export const NicknameBlock = styled.div<{$position: number}>`
    flex: 1;
    font-size: 26px;
    font-weight: ${props => props.$position == 1 ? '700': '600'};
    font-size: ${props => props.$position == 1 ? '26px': '22px'};
`

export const ScoreBlock = styled.div<{$position: number}>`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-variant-numeric: tabular-nums;
    font-size: ${props => props.$position == 1 ? '24px': '20px'};
`