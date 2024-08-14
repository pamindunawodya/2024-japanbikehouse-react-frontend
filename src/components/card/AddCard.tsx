import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface Props {
   
    vehicleModel?: string;
    city?: string;
    price?: number;
    millage?: string;
    id: string;
    imageUrl: string;
    name: string;
    contactNumber: string;
    email: string;
    vehicleCondition: string;
    vehicleCompany: string;
    year: string;
    engineCapacity: string;
    description: string;
    user: string;
    isMyArticle:boolean;

}


const AddCard: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const currentUserId = Cookies.get('userId');

    console.log('Current User ID:', currentUserId);
    console.log('Article User ID:', props.user);

    useEffect(() => {
        console.log(props.id)
     }, []);
     

    const handleReadMore = () => {
        navigate('/addcard', {
            state: {
                id:props.id,
                name: props.name,
                title: props.vehicleModel,
                description: props.description,
                city: props.city,
                millage: props.millage,
                yom: props.year,
                condition: props.vehicleCondition,
                company: props.vehicleCompany,
                capacity: props.engineCapacity,
                contactnumber: props.contactNumber,
                price: props.price,
                image: props.imageUrl,
                isMyArticle:props.isMyArticle
            }
        });
    };
    

    
    return (
        <div className={'my-5 flex justify-center'}>
            <div className={'w-5/6 p-5 border-solid border-4 m-2 flex items-center'}>
                <div className={'flex-1'}>
                    <h1 className={'text-3xl font-bold underline underline-offset-8 py-2'}>{props.vehicleModel}</h1>
                    <p className={'my-2 text-xl '}>Location: {props.city}</p>
                    <p className={'my-2 text-xl'}>Price: {props.price}</p>
                    <p className={'my-2 text-[20px]'}>Millage: {props.millage}</p>
                
                    <button className={` bg-green-600 p-2 text-white`} onClick={handleReadMore}>Read More...</button>                                
                </div>
                <img src={`http://localhost:8085/uploads/${props.imageUrl.img1}`} alt={props.vehicleModel} className={'mb-4 w-fit h-[195px] object-cover ml-5 border-2 ${prop.isMyarticle ? "block" : "hidden"'} />
            </div>
        </div>
    )
}

export default AddCard;
