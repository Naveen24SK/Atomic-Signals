import { BrowserRouter } from 'react-router-dom';
import Signup from './Pages/SignUp/SignUp';
import Routing from "./Router/Router";
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/Theme/Theme';
import './App.css';

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      {/* <Signup /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
