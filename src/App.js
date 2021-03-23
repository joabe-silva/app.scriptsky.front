import Header from './components/cliente/header';
import Container from '@material-ui/core/Container';
import { ProviderCarrinho } from './components/cliente/contextCarrinho';
import Routes from './routes';


function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm" className="container">
        <ProviderCarrinho>
          <Routes />
        </ProviderCarrinho>
      </Container>
    </div>
  );
}

export default App;
