import styled from 'styled-components';


export const ModalDialog = styled.dialog`
    padding: 20px;
    width: 400px;
    height: 500px;
    & > dialog {
        border: none;
    }
`;

export const ModalContent = styled.dialog`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const ModalButton = styled.button`
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
`;