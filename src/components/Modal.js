import React from 'react';
import ReactDOM from 'react-dom';

/*
 * ReactDOM.createPortal
 * 
 * allows React components to render in another part of the DOM that is outside of their parent component
 * for accessibility best practices, the modal component is added to the end of the document.body element
 */

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button 
                        type="button"
                        className="modal-close-button"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={hide}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p>Hello, I'm a modal.</p>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;