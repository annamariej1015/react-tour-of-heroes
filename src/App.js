import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <Router>
        <AppRouter />
    </Router>
  );
}

export default App;
