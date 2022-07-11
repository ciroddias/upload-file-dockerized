import React, { useContext } from "react";
import { Container } from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import theme from "../../styles/theme";
import Modal from "../Modal";
import FileUploadProgress from "../FileUploadProgress";
import { v4 as uuidv4 } from 'uuid';
import { IFile } from "../../interfaces/IFile";
import { UploadProgressContext } from "../../contexts/uploadProgressContext";

interface IUploadModal {
    files: File[];
    uploadProgress: number;
    currentFileIndex: number;
}

export default function UploadModal({files, uploadProgress, currentFileIndex}: IUploadModal) {
    const getValue = (index: number): number => {
        let value = uploadProgress;

        if (currentFileIndex < index) {
            value = 0
        } else if (currentFileIndex > index){
            value = 100
        }

        return value
    }
    return (
        <Container>
            {
                files.map((file: File, index) => {
                    return (
                        <FileUploadProgress 
                            key={uuidv4()}
                            name={file.name} 
                            size={file.size} 
                            value={getValue(index)} 
                        />
                    )                            
                })
            }
        </Container>    
    )
}