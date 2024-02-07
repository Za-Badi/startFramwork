

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import MasterLayout from "./MasterPage/MasterLayout";
import Home from './home/Home';
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Notfound from "./notfound/Notfound";


const router = createBrowserRouter([
  {path:'', element: <MasterLayout/>,children:[
    {path:'', element: <Home/>},
    {path:'home', element: <Home/>},
    {path:'about', element: <About/>},
    {path:'portfolio', element: <Portfolio/>},
    {path:'contact', element: <Contact/>},
    {path:'*', element: <Notfound/>}
 
  ]}
])


function App() {
  return (

    <>
    <RouterProvider router={router}/>
      </>
    // <div className="App">
    //   <h1> zaha </h1>
    
    // </div>
  );
}

export default App;
