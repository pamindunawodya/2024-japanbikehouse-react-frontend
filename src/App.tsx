import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import './App.css'
import Home from "./views/home";
import Login from "./views/login";
import Signup from "./views/signup";
import Postads from "./views/postAdd";
import Combobox from "./components/input/comboBox";
import AddCardFullDetails from "./components/card/AddCardFullDetails";
import { UserProvider } from "./util/UserProvider";
import MyAdd from "./views/myads";

interface Props{

}

interface State{

}


class App extends React.Component<Props, State>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return (
        <div>
            <BrowserRouter>
            <UserProvider>
            <Header/>
            
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/signin"} element={<Login/>}/>
                <Route path={"/signup"} element={<Signup/>}/>
                <Route path={"/post"} element={<Postads/>}/>
                <Route path={"/combo"} element={<Combobox/>}/>
                <Route path="/addcard" element={<AddCardFullDetails/>}/>
                <Route path="/myadd" element={<MyAdd/>}/>
             

            </Routes>
            
            <Footer/>
            </UserProvider>
            </BrowserRouter>
        </div>
    );
    }
}

export default App
