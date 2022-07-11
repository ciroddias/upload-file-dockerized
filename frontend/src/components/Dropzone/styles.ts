import styled from "styled-components";

export const Container = styled.div`
    border: dashed .1rem ${props => props.theme.colors.detail};
    border-radius: 1rem;
    padding: 2rem;
    color: ${props => props.theme.colors.detail};
`