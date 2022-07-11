import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.cardBackground};
    margin: auto;
    width: 25rem;
    text-align: center;
    border-radius: 2rem;
    padding: 2rem;
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