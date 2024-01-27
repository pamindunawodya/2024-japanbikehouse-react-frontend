import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import './App.css'
import {SwipeCarousel} from "./components/layout/carasoul";
import Home from "./views/home";
import SearchField from "./components/input/searchbar";
import Login from "./views/login";
import Signup from "./views/signup";

interface Props{

}

interface State{

}


class App extends React.Component<Props, State>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return (
        <div>
            <BrowserRouter>
            <Header/>

            {/*<SwipeCarousel/>*/}
            {/*    <SearchField/>*/}


            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/signin"} element={<Login/>}/>
                <Route path={"/signup"} element={<Signup/>}/>



            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
    }
}

export default App
