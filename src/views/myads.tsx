import React, { useEffect, useState } from "react";
import axios from "axios";
import AddCard from "../components/card/AddCard";
import Cookies from 'js-cookie';

interface Data {
    _id: string;
    vehicleModel: string;
    city: string;
    price: number;
    millage: string;
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
    isMyArticle:boolean
}

function MyAdd(): JSX.Element {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    
    const config = {
        headers: {
            'Authorization': JSON.parse(Cookies.get('token') || 'null'),
            'Content-Type': 'multipart/form-data'
        }
    };

    const fetchData = async (): Promise<void> => {
        try {
            const response = await axios.get('http://localhost:8085/get/myarticle?size=10&page=1', config);
            setData(response.data.data);
    
            console.log(response.data.data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch articles');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        console.log('hello');
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section>
            <div className='container mx-auto mt-24'>
                {data.map((item, index) => (
                    <AddCard
                        key={index}       
                        vehicleModel={item.vehicleModel}
                        city={item.city}
                        price={item.price}
                        millage={item.millage}
                        id={item._id}
                        imageUrl={item.imageUrl}
                        year={item.year}
                        name={item.name}
                        vehicleCondition={item.vehicleCondition}
                        vehicleCompany={item.vehicleCompany}
                        engineCapacity={item.engineCapacity}
                        contactNumber={item.contactNumber}
                        description={item.description}
                        user={item.user} // Pass the user ID here
                        isMyArticle={true}
                    />
                ))}
            </div>
        </section>
    );
}

export default MyAdd;
