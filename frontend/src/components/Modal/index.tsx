import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface IModalProps {
  isOpen: boolean,
  children: ReactNode
}

export default function Modal({isOpen, children}: IModalProps){
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };
    
    ReactModal.setAppElement('body');
    
    return (
      <ReactModal style={customStyles} isOpen={isOpen}>
        {children}
      </ReactModal>
    )
}