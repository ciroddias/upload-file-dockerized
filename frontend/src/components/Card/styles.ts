import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.cardBackground};
    margin: auto;
    width: 25rem;
    text-align: center;
    border-radius: 2rem;
    padding: 2rem;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.1);

    @media(max-width: 400px) {
        width: 90%;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.alternativeText};
`

export const Content = styled.div`
    margin: 2rem 0 0;
`