import styled from "styled-components";

export const Container = styled.ul`
    background-color: ${props => props.theme.colors.cardBackground};
    position: absolute;
    width: 20rem;
    bottom: 2rem;
    right: 2rem;
    border-radius: 2rem;
    padding: 2rem;
`