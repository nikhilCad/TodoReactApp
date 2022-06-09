import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos'; //use {} if using rafc as it is trying to find a default export for in your file.
import {Footer} from './MyComponents/Footer';
 
function App() {
  let myVariable = 345;
  return (
    <>
   
    <Header title="My Todos List" searchBar={true}/>
    <Todos/>
    <Footer/>

    </>
  );
}

export default App;
