import './App.css';
import { Container } from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import WeatherList from './components/WeatherList'
import ErrorMessage from './components/ErrorMessage'

function App() {
  return (
    <div>
      <SearchBar />
      <Container className="App">
        <ErrorMessage/>
        <WeatherList />
      </Container>
    </div>

  );
}

export default App;
