import styled from "styled-components";

export const Container = styled.li`
    margin-bottom: 1rem;
    border-bottom: solid 1px ${props => props.theme.colors.background};
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
`