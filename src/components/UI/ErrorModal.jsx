import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  const handleConfirm = () => {
    if (props.onConfirm) {
      props.onConfirm();
    }
  };

  return (
    <div className="error-modal">
      <div
        className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"
        onClick={handleConfirm}
      ></div>
      <Card className="w-[36rem] p-0 z-20 bg-gray-300">
        <header className="bg-red-700 p-4 rounded-t-xl">
          <h2 className="text-center text-xl text-white">
            {props.error.title}
          </h2>
        </header>
        <section className="p-4">{props.error.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={handleConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
