import { useState } from 'react'
import Signup from './Pages/SignUp/SignUp';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Signup />
      </div>
  );
};

export default App;
