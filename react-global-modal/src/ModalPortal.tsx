// ModalPortal.tsx

import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal: React.FC = ({ children }) => {
    const modalRoot = document.getElementById('modal-root');
    return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;