import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form/Form";
import TextField from "./components/Form/TextField";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen grid items-center text-center">
      <h2 className="">Hello WOrld!</h2>
      <Form>
        <TextField>TESTING BITCH</TextField>
      </Form>
    </div>
  );
}

export default App;
