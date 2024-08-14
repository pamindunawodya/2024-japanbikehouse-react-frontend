import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "../components/input/input";
import Imageinput from "../components/input/imageInput";
import Combobox from "../components/input/comboBox";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from 'js-cookie';

function Postads(): JSX.Element {

    let location = useLocation();
    const article =location?.state?.article
    
    const [id, setId] = useState(article ? article.id:"");
    const [name, setName] = useState("");
    const [contactnumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [millage, setMillage] = useState(article ? article.millage:"");
    const [price, setPrice] = useState(article ? article.price:"");
    const [vehicleCondition, setVehicleCondition] = useState(article ? article.condition:"");
    const [vehicleCompany, setVehicleCompany] = useState(article ? article.company:"");
    const [vehicleModel, setVehicleModel] = useState(article ? article.title:"");
    const [year, setYear] = useState(article ? article.yom:"");
    const [engineCapacity, setEngineCapacity] = useState(article ? article.capacity:"");
    const [description, setDescription] = useState(article ? article.description:"");
    const [img1, setImg1] = useState<File | null>(null);
    const [img2, setImg2] = useState<File | null>(null);
    const [img3, setImg3] = useState<File | null>(null);
    const [img4, setImg4] = useState<File | null>(null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
      //  console.log(article.id);
        const user = JSON.parse(Cookies.get('user'));
        console.log('user');
        console.log(user);
        setName(user.username);
        console.log(user.username);
        setEmail(user.email)
        setContactNumber(user.contactnumber)
        console.log(user.contactnumber)
        setCity(user.city)
        console.log(article)
      


    }, []);

    const handleInputs = (e: any,type:string) => {
        switch(type){
         case 'name' :
             setName(e.target.value);
             break;
             case 'contactnumber':
                 setContactNumber(e.target.value)
                 break;
             case 'millage':
                 setMillage(e.target.value)
                 break;
             case 'city':
                 setCity(e.target.value)
                 break;
             case 'email':
                setEmail(e.target.value)
                 break;
             case 'price':
                 setPrice(e.target.value)
                 break;
             case 'vehicleCondition':
                 setVehicleCondition(e.target.value)
                 break;
             case 'vehicleCompany':
                setVehicleCompany(e.target.value)
                 break;
             case 'vehicleModel':
                setVehicleModel(e.target.value)
                 break;
             case 'year':
                 setYear(e.target.value)
                 break;
             case 'engineCapacity':
                 setEngineCapacity(e.target.value)
                 break;
             case 'description':
                 setDescription(e.target.value)
                 break;
                 case 'img1':
                     setImg1(e.target .files?.[0] );
                     break;
                 case 'img2':
                     setImg2(e.target .files?.[0] );
                     break;
                 case 'img3':
                     setImg3(e.target .files?.[0] );
                     break;
                 case 'img4':
                     setImg4(e.target .files?.[0] );
                     break;
                      case 'img3':
                     setImg3(e.target .files?.[0] );
                     break;
                        
             default:
                 break;
         }
     };

    const validateSubmission = () => {
        let isValidInput = true;
        let errorMsg = '';

        if (!name) {
            isValidInput = false;
            errorMsg = " > Invalid Name";
        }
        if (!email) {
            isValidInput = false;
            errorMsg += " > Invalid Email";
        }
        if (!contactnumber) {
            isValidInput = false;
            errorMsg += " > Invalid Contact Number";
        }

        if (isValidInput) {
            setErrorMsg('');
           btnAction();
        } else {
            setErrorMsg(errorMsg);
        }
    };

    const submitNewUser = () => {
        const formDat = new FormData();
        formDat.append('name', name);
        formDat.append('contactnumber', contactnumber);
        formDat.append('millage', millage);
        formDat.append('city', city);
        formDat.append('email', email);
        formDat.append('price', price);
        formDat.append('vehicleCondition', vehicleCondition);
        formDat.append('vehicleCompany', vehicleCompany);
        formDat.append('vehicleModel', vehicleModel);
        formDat.append('year', year);
        formDat.append('engineCapacity', engineCapacity);
        formDat.append('description', description);
        if (img1) formDat.append('img1', img1);
        if (img2) formDat.append('img2', img2);
        if (img3) formDat.append('img3', img3);
        if (img4) formDat.append('img4', img4);

        const config = {
            headers: {
                'Authorization': JSON.parse(Cookies.get('token')),
                'Content-Type': 'multipart/form-data'
            }
        };

        axios.post('http://localhost:8085/article', formDat, config)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You successfully submitted the form!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
            });
    };



    const editArticle = () => {
        const formDat = new FormData();
        formDat.append('id', id);
        formDat.append('name', name);
        formDat.append('contactnumber', contactnumber);
        formDat.append('millage', millage);
        formDat.append('city', city);
        formDat.append('email', email);
        formDat.append('price', price);
        formDat.append('vehicleCondition', vehicleCondition);
        formDat.append('vehicleCompany', vehicleCompany);
        formDat.append('vehicleModel', vehicleModel);
        formDat.append('year', year);
        formDat.append('engineCapacity', engineCapacity);
        formDat.append('description', description);
        if (img1) formDat.append('img1', img1);
        if (img2) formDat.append('img2', img2);
        if (img3) formDat.append('img3', img3);
        if (img4) formDat.append('img4', img4);

        const config = {
            headers: {
                'Authorization': JSON.parse(Cookies.get('token')),
                'Content-Type': 'multipart/form-data'
            }
        };

        axios.put('http://localhost:8085/article/update', formDat, config)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You Updated successfully submitted the form!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
            });
    };


   


    function btnAction(){
        if (article){
            editArticle()
        }else {
            submitNewUser();
        }
    }



    return (
        <section className={'flex justify-center items-center p-6 my-20'}>
            <div className={'w-fit p-10 border shadow-xl rounded-xl min-h-[900px]'}>
                <img src="src/assets/Logo.png" title="logo" alt="logo" className={'w-24 m-auto'} />
                <div className={'text-2xl font-bold text-[#0652DD] text-center mt-5'}>
                    Post Your Ads
                </div>
                <div className={'mt-6 min-w-[600px]'}>
                    <span className="font-medium ">Contact Info</span>
                    <div className={'grid grid-cols-2  place-content-start '}>
                        <Input
                            type={'text'}
                            name={'name'}
                            label={'Name'}
                            placeholder={'Enter your first name'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'name')}
                            value={name}
                        />
                        <Input
                            type={'text'}
                            name={'contactnumber'}
                            label={'Contact Number'}
                            placeholder={'Enter Phone number'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'contactnumber')}
                            value={contactnumber}
                        />
                        <Input
                            type={'email'}
                            name={'email'}
                            label={'Email'}
                            placeholder={'Enter your email'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'email')}
                            value={email}
                        />
                        <Input
                            type={'text'}
                            name={'city'}
                            label={'City'}
                            placeholder={'Enter your city'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'city')}
                            value={city}
                        />
                        <Input
                            type={'text'}
                            name={"millage"}
                            label={'Millage'}
                            placeholder={'Km'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'millage')}
                            value={millage}
                        />
                        <Input
                            type={'number'}
                            name={"price"}
                            label={'Price'}
                            placeholder={'Enter price'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'price')}
                            value={price}
                        />
                    </div>
                    <span className="font-medium ">Vehicle Information</span>
                    <div className={'grid grid-cols-2  place-content-start '}>
                        <Combobox
                            type="combobox"
                            name={'vehicleCondition'}
                            label={'Vehicle Condition'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'vehicleCondition')}
                            options={[
                                { label: 'Brand New', value: 'Brand New' },
                                { label: 'Registered[used]', value: 'Registered[used]' },
                                { label: 'Unregistered', value: 'Unregistered' },
                                { label: 'Antique', value: 'Antique' },
                            ]}
                            value={vehicleCondition}
                        />
                        <Combobox
                            type="combobox"
                            name={'vehicleCompany'}
                            label={'Vehicle Company'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'vehicleCompany')}
                            options={[
                                { label: 'Honda', value: 'Honda' },
                                { label: 'Ducati', value: 'Ducati' },
                                { label: 'Yamaha', value: 'Yamaha' },
                                { label: 'Suzuki', value: 'Suzuki' },
                                { label: 'BMW', value: 'BMW' },
                                { label: 'Kawasaki', value: 'Kawasaki' },
                                { label: 'KTM', value: 'KTM' },
                                { label: 'Harley-Davidson', value: 'Harley-Davidson' },
                                { label: 'Royal Enfield', value: 'Royal Enfield' },
                                { label: 'Aprilia', value: 'Aprilia' },
                                { label: 'Triumph', value: 'Triumph' }
                            ]}
                            value={vehicleCompany}
                        />
                        <Input
                            type={'text'}
                            name={'vehicleModel'}
                            label={'Model'}
                            placeholder={'Enter your Bike Model '}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'vehicleModel')}
                            value={vehicleModel}
                        />
                        <Input
                            type={'text'}
                            name={'year'}
                            label={'Manufacture Year'}
                            placeholder={'Enter Manufacture Year'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'year')}
                            value={year}
                        />
                        <Input
                            type={'text'}
                            name={'engineCapacity'}
                            label={'Engine Capacity'}
                            placeholder={'cc'}
                            optional={false}
                            callBack={(e) => handleInputs(e, 'engineCapacity')}
                            value={engineCapacity}
                        />
                    </div>
                    <span className="font-medium mt-8 ">Additional Info</span>
                    <Input
                        type={'textarea'}
                        name={'description'}
                        label={'Description'}
                        placeholder={'Add your another Bike details'}
                        optional={false}
                        callBack={(e) => handleInputs(e, 'description')}
                        value={description}
                    />
                    <span className="font-medium mt-8 ">Upload Images</span>
                    <div className={'grid grid-cols-2  place-content-start '}>
                        <Imageinput
                            type={'file'}
                            name={'img1'}
                            label={'Image 1'}
                            placeholder={'Add your Bike details'}
                            optional={false}
                            callBack={setImg1}
                        />
                        <Imageinput
                            type={'file'}
                            name={'img2'}
                            label={'Image 2'}
                            placeholder={'Add your Bike details'}
                            optional={false}
                            callBack={setImg2}
                        />
                        <Imageinput
                            type={'file'}
                            name={'img3'}
                            label={'Image 3'}
                            placeholder={'Add your Bike details'}
                            optional={false}
                            callBack={setImg3}
                        />
                        <Imageinput
                            type={'file'}
                            name={'img4'}
                            label={'Image 4'}
                            placeholder={'Add your Bike details'}
                            optional={false}
                            callBack={setImg4}
                        />
                    </div>
                </div>
                <div className={'text-center mt-5'}>
                    <button className={'main-btn'} onClick={validateSubmission}>{article ? "Update Item" : "Save Item"}</button>
                </div>
            </div>
        </section>
    );
}

export default Postads;
