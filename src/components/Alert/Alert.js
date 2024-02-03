import React from 'react';

import './Alert.scss';
import logo from '../../assets/Images/logo.png'

function Alert({ message, onClose, isOpen }) {
    // Conditionally render the modal based on the isOpen prop
    const displayStyle = isOpen ? { display: 'flex' } : { display: 'none' };

    return (
        <div className="modal" style={displayStyle}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    <div className='modal-wrap'><img src={logo} width='40px'/></div>
                </span>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Alert;
