import styled from "styled-components"


export const Logo = styled.div`
    width: 100%;
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 34px;
    font-weight: 900;
    letter-spacing: -0.01em;
    
`;

export const FormContainer = styled.div`
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const Title = styled.div`
    font-family: 'Archivo Black',Archivo,sans-serif;
    font-size: 24px;
`

export const Subtitle = styled.div`
    color: var(--dim);
    line-height: 1.4;
`