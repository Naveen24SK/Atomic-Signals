import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Signup from './Pages/SignUp/SignUp';
import Routing from "./Router/Router";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      {/* <Signup /> */}
    </div>
  );
}

export default App;
