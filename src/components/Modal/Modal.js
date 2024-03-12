import React , {useState} from 'react'
import './Modal.scss'


function Modal({text}){
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal) 
        // The set state of !modal will set state to opposite of current
        // Ie if state is false, click will turn it to true
        // and if state is true click will make it false
    }
    return(
        <>
        <button className='modal-btn' onClick={toggleModal}>{text}</button>
        {/* if modal is true return modal if not return nothing */}
        {modal &&(
            <div className='modal'>
            <div className='modal-overlay' onClick={toggleModal}></div>
            <div className='modal-content'>
                <p>next round</p>
                <button className='modal-close'onClick={toggleModal} >close</button>
            </div>
            </div>
        )}
        </>
    )
}

export default Modal