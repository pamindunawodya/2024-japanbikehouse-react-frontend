import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../components/input/input";


interface state{
    email:string,
    password:string,
    errorMsg:string
}

function Login():JSX.Element{

    const navigate = useNavigate();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    // const[errorMsg, setErrorMsg] = useState('');

    const handleInput = (e, type): void => {
        switch (type) {
            case 'email':
                // this.setState({...this.state, email: e.target.value})
                setEmail(e.target.value);
                break;
            case 'password':
                // this.setState({...this.state, password: e.target.value})
                setPassword(e.target.value)
                break;
        }
    }

    return (

        <section className={'flex justify-center items-center p-5'}>
            <div className={'w-fit p-24 border shadow-xl rounded-xl'}>

                <img src="src/assets/Logo.png" title="logo" alt="logo" className={'w-18 m-auto'}/>

                <div className={'text-2xl font-bold text-green-600 text-center mt-5'}>
                    Sign In
                </div>

                <div className={'mt-5 min-w-[300px]'}>

                    <Input
                        type={'email'}
                        name={'email'}
                        label={'Email'}
                        placeholder={'Enter your email'}
                        optional={false}
                        callBack={handleInput}
                    />

                    <Input
                        type={'password'}
                        name={'password'}
                        label={'Password'}
                        placeholder={'Enter your password'}
                        optional={false}
                        callBack={handleInput}
                    />

                </div>

                {/*<div className={'text-center mt-5'}>*/}
                {/*    <button className={'main-btn'} onClick={}>Sign In</button>*/}
                {/*</div>*/}

                {/*{*/}
                {/*    errorMsg &&*/}
                {/*    <div className={'bg-red-100 text-center p-2 m-2'}>*/}
                {/*        { errorMsg }*/}
                {/*    </div>*/}
                {/*}*/}


                <div className={'text-center mt-5'}>
                    {/*Do not have an account? <Link to={'/signup'}><span className={'text-blue-600 underline'}>Sign up now</span></Link>*/}
                </div>

            </div>
        </section>
    );
}

export default Login;

