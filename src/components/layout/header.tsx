import React from "react";
import ButtonWrapper from "../Buttons/spotlightButton";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";



class Header extends React.Component<any, any>{
    
    render() {
        return(
            <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
                <nav className={'flex justify-between items-center  p-1 border-cyan-300 shadow-xl bg-[#FFFFFF]   '}>

                <span className={'flex items-center'}>
                <img className={'w-[60px] ml-5'} src="src/assets/Logo.png" alt="Logo"/>
                 <span className={' jtext  text-5xl font-semibold ml-2'}>J</span> <span className={'  text-xl pt-2 overline '}>apan Bike මහගෙදර </span>
                </span>


                    <ul className={'flex gap-[2vw]  text-xl '}>
                        <li> <Link to={"/signup"}><Button className={'RegisterBtn w-[110px] h-[35px]'} variant="outlined" color="error" >Register</Button></Link></li>
                        <li><div className={'lineOne'}></div></li>
                        <li> <Link to={"/signin"}><Button className={'signinBtn  w-[110px] h-[35px]'} variant="contained" color="success">Sign in</Button></Link></li>
                        <li><div className={'lineOne'}></div></li>
                        <li> <Link to={"/myadd"}><Button className={'w-[110px] h-[35px] '} variant="contained" color="info" >My Add</Button></Link></li>
                        <li> <Link to={"/post"}><ButtonWrapper/></Link></li>
                        


                    </ul>
                </nav>
            </header>



        );
        
    }
}
export default Header;