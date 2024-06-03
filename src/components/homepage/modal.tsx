import React, { forwardRef, useImperativeHandle } from 'react';
import style from "@/css/modal.module.css"
import {image} from  "@/data/imageacess.json"


interface ModalProps {
  heading: string;
  info: string;
  photo: string;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ photo, heading, info }, ref) => {

  const dialogRef = ref as React.MutableRefObject<HTMLDialogElement | null>;

  if (ref !== null) {

    return (

      <div className={style.modal}>
        <div className="container">
        <dialog className={style.modal} ref={dialogRef}>
          <div className={style.close}>
            <button onClick={() => dialogRef.current?.close()}><img src = {image.backbutton} alt="x" className={style.backbutton}></img></button>
          </div>
          <div className={style.top}>
            <section className={style.heading}>
              <h2>From the</h2>
              <h1>{heading.slice(8)}</h1>
            </section>
            <section className={style.image}>
              <div><img src={photo} alt={heading} /></div>
            </section>
          </div>
          <div className={style.info}>
            {info}
          </div>
        </dialog>
        </div>
      </div>
    );
  }
});

Modal.displayName = 'ModalComponent';

export default Modal;
