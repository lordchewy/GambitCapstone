import React from 'react';

import './Alert.scss';

function Alert({ message, onClose, isOpen }) {
    // Conditionally render the modal based on the isOpen prop
    const displayStyle = isOpen ? { display: 'flex' } : { display: 'none' };

    return (
        <div className="modal" style={displayStyle}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>close</span>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Alert;
