
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feed from './components/Feed'
import Jogos from './components/Jogos'
import Sobre from './components/Sobre'
import Cadastro from './components/Cadastro'
import Footer from './components/Footer'
import Login from './components/Login'
import Usuario from './components/Usuario'
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada'
import LandingPage from './components/LandingPage'
import Participar from './components/Participar'
import Chaves from './components/Participar/components/Chaves'
import NewHome from './components/NewHome'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <div className="divAppContainer">
          <BrowserRouter>
              <div>
                  <Routes>
	  		<Route path="/*" element={<PaginaNaoEncontrada/>}/>
			<Route path="/" element={<LandingPage />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/cadastro" element={<Cadastro />} />
                        <Route path="/now" element={<NewHome />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/feed/:id" element={<Feed />} />
                        <Route path="/games" element={<Jogos />} />
                        <Route path="/about" element={<Sobre />} />
                        <Route path="/u/:id" element={<Usuario/>} />
                        <Route path="/t/:id" element={<Participar/>} />
                        <Route path="/chaves" element={<Chaves/>} />
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App
