import Card from "../UI/Card";

export const WorkersList = (props) => {
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {props.workers.map((worker) => (
          <li className="flex justify-between cursor-pointer hover:shadow-xl hover:text-red-400 p-2">
            <span>Ramazan Mert Kaya</span>
            <span className="text-teal-700 font-medium">6000</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
