import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar logoText='Fake Store' itemNumber={0} />
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
