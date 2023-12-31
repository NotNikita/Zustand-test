import {useEffect, useRef} from 'react';
import {useModal} from '../hooks/useModal';
import { ModalButton, ModalContent, ModalDialog } from './Modal.styles';

export const Modal = () => {
    // состояние модалки
    const {isOpen, toggleModal} = useModal();
    // ссылка на модалку
    const modalRef = useRef(null);

    useEffect(() => {
        if (!modalRef.current) return;

        // если модалка открыта, то фокусируемся на ней
        if (isOpen) {
            modalRef.current.showModal();
        } else {
            modalRef.current.close();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <ModalDialog ref={modalRef}>
            <ModalContent>
                <h3>Modal Window</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <ModalButton onClick={toggleModal}>{isOpen ? 'Close Modal' : 'Open Modal'}</ModalButton>
            </ModalContent>
        </ModalDialog>
    );
};
