import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import Reps from './Pages/Reps';
import LoanEst from './Pages/LoanEst';
import Account from './Pages/Account';
import Support from './Pages/Support';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cars" element={<Cars />}/>
        <Route path="/Representatives" element={<Reps />}/>
        <Route path="/Loan-Estimator" element={<LoanEst />}/>
        <Route path="/Account" element={<Account />}/>
        <Route path="/Support" element={<Support />}/>
      </Routes>
    </Router>
  )
}

export default App;
