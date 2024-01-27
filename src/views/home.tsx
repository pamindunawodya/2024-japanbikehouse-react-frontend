import React from "react";
import AddCard from "../components/card/AddCard";
import SearchField from "../components/input/searchbar";
import {SwipeCarousel} from "../components/layout/carasoul";
import SkipPages from "../components/Buttons/skip.page.bar";




interface Data{

    id :string;
    title:string;
    location:string;
    price:number;
    millage:string;
    imageUrl: string; // Add imageUrl to the Data interface
}

const data:Data[]=[
    {
        id:"Add001",
        title:"CBR100RR",
        location:"Horana",
        millage:'5000Km',
        price:6000.00,
        imageUrl:"src/assets/1000RR.jpg",
    }
]

class Home extends React.Component<any, any>{

    render() {
        return(
            <section>
                <SwipeCarousel/>
                <SearchField/>
                <div className={' '}>
                    {

                        data.map((s,index)=>{
                            return <AddCard title={s.title} location={s.location}  price={s.price} millage={s.millage}  imageUrl={s.imageUrl}/>

                        })
                    }
                </div>
            <SkipPages/>
            </section>
        );
    }
}
export default Home