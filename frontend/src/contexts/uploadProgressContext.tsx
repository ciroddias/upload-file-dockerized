import React, { createContext, ReactNode, SetStateAction, useState } from "react";


interface IUploadProgressProviderProps {
    children: ReactNode;
}

export const UploadProgressContext = createContext({});

export const UploadProgressProvider = ({children}: IUploadProgressProviderProps) => {
    const [uploadProgress, setUploadProgress ]= useState(0);

    return (
        <UploadProgressContext.Provider value={{uploadProgress, setUploadProgress}}>
            {children}
        </UploadProgressContext.Provider>
    )
}