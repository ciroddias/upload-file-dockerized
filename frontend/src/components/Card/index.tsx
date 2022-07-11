import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { Container, Content, Header } from "./styles";

interface ICardProps {
    title: string;
    iconRight: ReactElement;
    children: ReactNode;
}

export default function Card({title, iconRight, children}: ICardProps) {
    return (
        <Container>
            <Header>
                <>
                    <h3>{title}</h3>
                    {iconRight}
                </>
            </Header>
            <Content>
                {children}
            </Content>
        </Container>
    )
}