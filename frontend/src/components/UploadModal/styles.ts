import styled from "styled-components";

export const Container = styled.ul`
    background-color: ${props => props.theme.colors.cardBackground};
    position: absolute;
    width: 20rem;
    bottom: 2rem;
    right: 2rem;
    border-radius: 2rem;
    padding: 2rem;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);


    @media(max-width: 400px) {
        width: 90%;
        transform: translateX(50%);
        right: 50%;
    }
`