import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import { FiUpload } from 'react-icons/fi'
import theme from '../styles/theme'
import Dropzone from '../components/Dropzone'
import Input from '../components/Input'
import { ChangeEvent, useState } from 'react'
import UploadModal from '../components/UploadModal'
import { IFile } from '../interfaces/IFile'
import { instance } from './api'

const Home: NextPage = () => {
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  
 
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = [...e.target.files as any]
    
    for (let i = 0; i < selectedFiles.length; i++) {
      let array = files
      array.push(selectedFiles[i])
      setFiles(array)
    }

    const formData = new FormData();
    selectedFiles.map(
      file => {
        formData.append("file", file)
      }
    )
    const response = await uploadFiles(formData)
  }

  async function uploadFiles(formData: FormData) {
    try {
      const response = await instance.post('/', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (e: ProgressEvent) => { 
          const progress: number = Math.round(
            (e.loaded * 100) / e.total
          )
          if (progress === 100) setCurrentFileIndex(currentFileIndex+1)
          setUploadProgress(progress)
        }
      })
      return response
    } catch (error: any) {
      return {status: false, message: error.message}
    }
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card
          title='Upload' 
          iconRight={
            <FiUpload 
              size="1.5rem"
              style={{color: theme.colors.detail}}
              />
          }
        >
          <Input label='Selecione os arquivos' type='file' accept="image/png, image/jpg, image/gif, image/jpeg" onChange={handleUpload}/>
          <Dropzone />
        </Card>
        {files.length > 0 
          && <UploadModal
                currentFileIndex={currentFileIndex}
                files={files} 
                uploadProgress={uploadProgress}/>}
      </main>
    </div>
  )
}

export default Home