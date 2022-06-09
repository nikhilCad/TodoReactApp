import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos'; //use {} if using rafc as it is trying to find a default export for in your file.
import {Footer} from './MyComponents/Footer';
 
function App() {

  //arrow function of javascript  
  const onDelete =()=>{
      console.log("I am ondelete")
  }
  
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "Get vegetables"
    },
    {
      sno: 2,
      title: "Go to market 2",
      desc: "Get fruits"
    },
    {
      sno: 3,
      title: "Go to market 3",
      desc: "Get pens"
    }
  ]

  return (
    <>
   
    <Header title="My Todos List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>

    </>
  );
}

export default App;
