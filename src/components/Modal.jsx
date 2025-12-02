import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
       return {
        open(){ 
            dialog.current.showModal();
        }
       };
    });

    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900 backdrop:bg-opacity-50 backdrop:backdrop-blur-sm rounded-md p-6 border-2 border-stone-600 bg-stone-100 text-stone-800"> 
        {children}  
        <form method="dialog" className="mt-4 text-right ">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>,
    document.getElementById('modal-root')
    );
});


export default Modal;