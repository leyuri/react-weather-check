import './App.css';
import { Container } from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import WeatherList from './components/WeatherList'

function App() {
  return (
    <div>
      <SearchBar />
      <Container className="App">
        <WeatherList />
      </Container>
    </div>

  );
}

export default App;
