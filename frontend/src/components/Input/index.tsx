import { ChangeEvent } from "react";
import { Container, In } from "./styles";

interface IInputProps {
    label: string;
    type: string;
    value?: string;
    isActive?: boolean;
    accept?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, type, isActive = true, accept, onChange}: IInputProps) {
    return (
        <Container isActive={isActive} htmlFor="in">
            {label}
            <In id="in" type={type} name='files[]' accept={accept} onChange={onChange} multiple/>
        </Container>
    )
}