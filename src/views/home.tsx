import React, { useEffect, useState } from "react";
import AddCard from "../components/card/AddCard";
import SearchField from "../components/input/searchbar";
import { SwipeCarousel } from "../components/layout/carasoul";
import SkipPages from "../components/Buttons/skip.page.bar";
import axios from "axios";
//import AddCardFullDetails from "../components/card/AddCardFullDetails"; // Import the new component

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
}

function Home(): JSX.Element {
    const [data, setData] = useState<Data[]>([]);
    

    const fetchData = (): void => {
        axios.get('http://localhost:8085/get')
            .then(response => {
                setData(response.data.data);
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
        console.log('hello');
    }, []);

    return (     
                <section>
                        <SwipeCarousel />
                        <SearchField />
                        <div className={'container mx-auto'}>
                            {
                                data.map((item, index) => (
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
                                    isMyArticle={false}
                                      
                                    />
                                   
                                ))
                              
                                
                            }
                        </div>
                        <SkipPages />
                    </section>
    );
}

export default Home;
