import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

const BackDrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.handleConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="error-modal">
      <Card className="w-[36rem] !p-0 z-20 bg-gray-300">
        <header className="bg-red-700 p-4 rounded-t-xl">
          <h2 className="text-center text-xl text-white">
            {props.error.title}
          </h2>
        </header>
        <section className="p-4">{props.error.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={props.handleConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { title, message } = props.error; // Access title and message from props.error
  const handleConfirm = () => {
    if (props.onConfirm) {
      props.onConfirm();
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop handleConfirm={handleConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          error={{ title, message }}
          handleConfirm={handleConfirm}/>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
