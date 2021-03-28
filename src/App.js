import Header from './components/cliente/header';
import Container from '@material-ui/core/Container';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm" className="container">
        <Routes /> 
      </Container>
    </div>
  );
}

export default App;
