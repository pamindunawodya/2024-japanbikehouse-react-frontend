import React from "react";
import ButtonWrapper from "../Buttons/spotlightButton";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";



class Header extends React.Component<any, any>{
    
    render() {
        return(
            <header>
                <nav className={'flex justify-between items-center  p-1 border-cyan-300 shadow-xl bg-[#cbd5e1] '}>

                <span className={'flex items-center'}>
                <img className={'w-[100px] ml-5'} src="src/assets/Logo.png" alt="Logo"/>
                 <span className={' jtext  text-8xl font-semibold ml-2'}>J</span> <span className={'  text-2xl pt-2 overline '}>apan Bike මහගෙදර </span>
                </span>


                    <ul className={'flex gap-[2vw]  text-2xl '}>
                        <li> <Button className={'RegisterBtn w-[125px] h-[55px]'} variant="outlined" color="error" >Register</Button></li>
                        <li className={'pt-1 '}><div className={'lineOne'}></div></li>
                        <li> <Link to={"/signin"}><Button className={'signinBtn  w-[125px] h-[55px]'} variant="contained" color="success">Sign in</Button></Link></li>
                        <li> <ButtonWrapper/></li>


                    </ul>
                </nav>
            </header>



        );
        
    }
}
export default Header;