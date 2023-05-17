import Button from "./Button";
import Card from "./Card";

const ErrorModal = () => {
  return (
    <div className="error-modal ">
      <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0" onClick=""></div>
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 p-4  rounded-t-xl ">
          <h2 className="text-center text-xl text-white">
            İsim alanı zorunludur
          </h2>
        </header>
        <section className="p-4">Lütfen bir isim giriniz</section>
        <footer className="p-4 flex justify-end">
          <Button>Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
