import React, { forwardRef, useImperativeHandle } from 'react';
import style from "@/css/modal.module.css"

interface ModalProps {
  heading: string;
  info: string;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ heading, info }, ref) => {
  return (
    <div className={style.modal}>
      <dialog className={style.modal} ref={ref}>
        <div className={style.close}>
          <button onClick={() => ref.current?.close()}> X</button>
        </div>
        <div className={style.top}>
          <section className={style.heading}>
            <h2>From the</h2>
            <h1>{heading.slice(8)}</h1>
          </section>
          <section className={style.image}>
            <img src="director.png" alt="" />
          </section>
        </div>
        <div className={style.info}>
          {info}
        </div>
      </dialog>
    </div>
  );
});

export default Modal;
