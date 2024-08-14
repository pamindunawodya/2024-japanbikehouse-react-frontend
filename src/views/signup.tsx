import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../components/input/input";
import axios from "axios";
import Swal from "sweetalert2";
import * as validator from "../util/validator";

function Signup(): JSX.Element {
    const [firstname, setFname] = useState<string>("");
    const [lastname, setLname] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [contactnumber, setContactNumber] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputs = (e: any, type: string) => {
        switch (type) {
            case 'fname':
                setFname(e.target.value);
                break;
            case 'lname':
                setLname(e.target.value);
                break;
            case 'username':
                setUsername(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
                case 'city':
                    setCity(e.target.value);
                    break; 
                    case 'contactnumber':
                setContactNumber(e.target.value);
                break;   
        }
    }

    //validate
   const validateSubmission = () => {

           let isValidInput: boolean = true;
           let errorMsg: string = '';
           setErrorMsg(errorMsg);


        /*   if (!validator.validateUsername(username)) {
               isValidInput = false;
               errorMsg = " > Invalid Username";
           }
           if (!validator.validateEmail(email)) {
               isValidInput = false;
               errorMsg = errorMsg + " > Invalid Email";
           }
           if (!validator.validateUsername(firstname)) {
               isValidInput = false;
               errorMsg = errorMsg +  " > Invalid Firstname";
           }
           if (!validator.validateUsername(lastname)) {
               isValidInput = false;
               errorMsg = errorMsg +  " > Invalid Lastname";
           }
           if (!validator.validatePassword(password)) {
               isValidInput = false;
               errorMsg = errorMsg + " > Invalid Password";
           }*/
           if (isValidInput) {

               setErrorMsg('');
               submitNewUser();

           } else {

               //this.setState({...this.state, errorMsg: errorMsg});
               setErrorMsg(errorMsg);
           }

       }

    const submitNewUser = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let data = JSON.stringify({
            username: username,
            fname: firstname,
            lname: lastname,
            email: email,
            password: password,
            city:city,
            contactnumber:contactnumber

        });
        console.log(data);
        

        axios.post('http://localhost:8085/users', data, config)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: err,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
            });
    }

    return (
        <section className={'flex justify-center items-center p-5 mt-28'}>
            <div className={'w-fit p-10 border shadow-xl rounded-xl'}>
                <img src="src/assets/Logo.png" title="logo" alt="logo" className={'w-24 m-auto'} />
                <div className={'text-2xl font-bold text-green-600 text-center mt-5'}>
                    Sign Up
                </div>
                <div className={'mt-5 min-w-[400px]'}>
                    <div className={'flex'}>
                        <Input
                            type={'text'}
                            name={'fname'}
                            label={'First Name'}
                            placeholder={'Enter your first name'}
                            optional={false}
                            callBack={handleInputs}
                        />
                        <Input
                            type={'text'}
                            name={'lname'}
                            label={'Last Name'}
                            placeholder={'Enter your last name'}
                            optional={false}
                            callBack={handleInputs}
                        />
                    </div>
                    <Input
                        type={'text'}
                        name={'username'}
                        label={'Username'}
                        placeholder={'Enter your username'}
                        optional={false}
                        callBack={handleInputs}
                    />
                    <Input
                        type={'email'}
                        name={'email'}
                        label={'Email'}
                        placeholder={'Enter your email'}
                        optional={false}
                        callBack={handleInputs}
                    />
                    <Input
                        type={'password'}
                        name={'password'}
                        label={'Password'}
                        placeholder={'Enter your password'}
                        optional={false}
                        callBack={handleInputs}
                    /><Input
                    type={'text'}
                    name={'city'}
                    label={'city'}
                    placeholder={'Enter your city name'}
                    optional={false}
                    callBack={handleInputs}
                />
                    <Input
                        type={'text'}
                        name={'contactnumber'}
                        label={'contactnumber'}
                        placeholder={'Enter your contactnumber'}
                        optional={false}
                        callBack={handleInputs}
                    />

                </div>
                <div className={'text-center mt-5'}>
                    <button className={'main-btn'} onClick={validateSubmission}>Sign Up</button>
                </div>
                <div className={'text-center mt-5'}>
                    Do have an account? <Link to={'/signin'}><span className={'text-blue-600 underline'}>Sign in now</span></Link>
                </div>
            </div>
        </section>
    );
}

export default Signup;
