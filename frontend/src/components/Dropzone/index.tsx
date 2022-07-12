import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Container } from './styles';

interface IDropzoneProps {
  onDrop: (acceptedFiles: File[]) => Promise<void>;
}

export default function Dropzone({onDrop}: IDropzoneProps) {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop, 
    accept: {
    'image/jpg': ['.jpg'],
    'image/png': ['.png'],
    'text/html': ['.html', '.htm'],
  }})

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Solte os arquivos aqui ...</p> :
          <p>Você pode também arrastar e soltar os arquivos aqui, ou clicar para selecioná-los</p>
      }
    </Container>
  )
}