import Header from './components/cliente/header';
import Grupos from './components/cliente/grupos';
import Container from '@material-ui/core/Container';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Grupos />
      <Container maxWidth="sm" className="container">
        <Routes /> 
      </Container>
    </div>
  );
}

export default App;
