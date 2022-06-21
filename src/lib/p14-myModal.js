import "./p14-my-modal.css";

const Modal = (props) => {
  return (
    <div className={props.display === true ? "modal-window" : "hidden"}>
      <p>{props.message}</p>
      <button onClick={props.action}>Close</button>
    </div>
  )
};

export default Modal;
