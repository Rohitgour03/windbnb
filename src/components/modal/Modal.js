import React, {Fragment} from "react";
import ReactDOM from 'react-dom'

// const Backdrop = (props) => {
//     return <div className='absolute inset-0 w-full h-full' onClick={props.onClose}/>;
// }

const ModalOverlay = (props) => {
    return (
        <div className={!props.showModel ? 
            "py-4 shadow-lg bg-white absolute w-full transition-transform z-20 -translate-y-[560px]" : 
            "py-4 shadow-lg bg-white absolute w-full transition-transform z-20 translate-y-0"}>
          <div className=''>{props.children}</div>
        </div>
      );
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
        {/* {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)} */}
        {ReactDOM.createPortal(
        <ModalOverlay
          showModel={props.showModel}>
            {props.children}
        </ModalOverlay>,
        portalElement
        )}
  </Fragment>
  )
}

export default Modal