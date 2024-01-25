import React from "react";
import {BrowserRouter,Routes} from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import './App.css'
import {SwipeCarousel} from "./components/layout/carasoul";
import Home from "./views/home";
import SearchField from "./components/input/searchbar";

interface Props{

}

interface State{

}


class App extends React.Component<Props, State>{
render(){
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <SwipeCarousel/>
                <SearchField/>
                <Home/>
            <Routes>
                {/*<Route path={"/SwipeCarousel"} element={<SwipeCarousel/>}/>*/}

            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
    }
}

export default App
