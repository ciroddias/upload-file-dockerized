import { CircularProgressbar } from "react-circular-progressbar"
import theme from "../../styles/theme"
import { Container } from "./styles"
import { } from 'react-icons/fi'

interface IFileUploadProgressProps {
    key: string
    name: string
    size: number
    value: number
}

export default function FileUploadProgress({key, name, size, value }:IFileUploadProgressProps) {
    return (
        <Container key={key}>            
            {name} <br />
            size: {(size/1000).toFixed(2)} KB

            <div>
                <CircularProgressbar 
                    strokeWidth={20}
                    value={value}
                    styles={{
                        root: {width: 25}, 
                        path: {stroke: theme.colors.green}
                    }}
                />
            </div>          
        </Container>
    )
}