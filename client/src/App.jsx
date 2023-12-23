import {BrowserRouter,Routes,Route} from "react-router-dom";
import {registroUsuario} from "./pages/registroUsuario";
import Navbar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Ruleta from './components/ruleta'; 




function App() {
  return (
    
    <div>
    <Navbar />
 
    
    <BottomBar />
  </div>
    
  );
}
  

export default App; 




