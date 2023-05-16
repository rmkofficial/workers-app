import AddWorker from "./components/Workers/AddWorker";
import { WorkersList } from "./components/Workers/WorkersList";

function App() {
  return (
    <div className="App">
      <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
      <AddWorker />
      <WorkersList workers={[]}/>
    </div>
  );
}

export default App;
