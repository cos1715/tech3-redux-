import React from 'react';

import './Modal.css';

const Modal = React.forwardRef((props, ref) => (
    <dialog ref={ref} className="Modal-dialog">
        {props.children}
    </dialog>
));

export default Modal;
