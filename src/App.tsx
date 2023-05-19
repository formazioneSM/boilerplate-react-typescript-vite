import { Input, Button } from "totofoot-library";
import "./App.css";

function App() {
  return (
    <>
      <Input
        label="prova label"
        placeholder="scrivi qualcosa"
        onChange={console.log}
      ></Input>
      <Button text="ciao"></Button>
    </>
  );
}

export default App;
