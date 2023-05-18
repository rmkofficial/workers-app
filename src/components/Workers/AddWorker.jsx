import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const [enteredWage, setEnteredWage] = useState("");

  const [error, setError] = useState("");

  const minimumWage = 5000;

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const wageHandler = (e) => {
    setEnteredWage(e.target.value);
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "") {
      setError({
        title: "İsim alanı zorunludur!",
        message: "Lütfen bir isim giriniz.",
      });
      return;
    }

    if (+enteredWage < minimumWage) {
      setError({
        title: "Maaş alanı zorunludur!",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    setEnteredName("");
    setEnteredWage("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan İsmi Giriniz"
            id="name"
            onChange={nameHandler}
            value={enteredName}
          ></input>
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş Miktarı Giriniz"
            id="wage"
            onChange={wageHandler}
            value={enteredWage}
          ></input>
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddWorker;
