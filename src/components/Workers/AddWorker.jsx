import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const [enteredWage, setEnteredWage] = useState("");

  const minimumWage = 5000;

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const wageHandler = (e) => {
    setEnteredWage(e.target.value);
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "" || enteredWage.trim() === "") {
      return;
    }

    if (+enteredWage < minimumWage) {
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

  return (
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
  );
};

export default AddWorker;
