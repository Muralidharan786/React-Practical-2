import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {    BrowserRouter,    Routes,    Route,    useParams,} from "react-router-dom";
// import Navigation from './components/Navigation'
// import BlogPost from './components/Parameter';
// import Home from './components/Parameter';
import Profile from './components/Profile';
import SimpleInput from './components/SimpleInput';
import Form from './components/Form';
import Formm from './components/Formm';
import Forms from './components/Forms';
import FormHook from './components/FormHook';
// import MemoParent from './components/MemoParent';
import MemoComputation from './components/MemoComputation';
import CallbackExample from './components/CallbackExample';
import ParentComponent from './components/ParentComponent';
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "./components/ErrorFallback";
// import MyComponents from './components/MyComponents';


// function About() {
//   return <h1 style={{ color: "blue", fontSize: "24px" }}>About Page</h1>;
// }
function App() {
  return (
    <>
    {/* <MemoParent />  */}
      <MemoComputation /> 
     <CallbackExample />
    <ParentComponent /> 

     {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
          <MyComponents />
     </ErrorBoundary> */}
      {/* <h1>React Context Demo</h1>
      <Profile />
      <SimpleInput />
      <Form />
      <Formm />
      <Forms />
      <FormHook />  */}

    </>
  );
}

export default App;
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigation />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
    
  
    // <>
    //   <Card />
    //   <Header />
    //   <Student name="Rahul" age={21}/>
    //   <Conditional isLoggedIn={true}/>
    //   <MyComponent />
    //   <Timer />
    //   <Timers />
    //   <Timerss />
      
    // </>


