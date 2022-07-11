import styled from "styled-components";

interface IInputProps {
    isActive: boolean
}

export const Container = styled.label<IInputProps>`
    display: ${props => props.isActive?'block':'none'};
    cursor: pointer;
    margin: 1rem 0;
    width: 100%;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.cardBackground};
    padding: 1rem;
    border-radius: 1rem;
    font-weight: 600;
    font-size: 1rem;
    transition: display 200ms ease-in;

    button {
        border: none;
    }
`

export const In = styled.input`
    display: none;
`