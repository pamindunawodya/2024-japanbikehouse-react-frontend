import React from "react";
import AddCard from "../components/card/AddCard";




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
                <div
                className={' '}>
                    {
                        data.map((s,index)=>{
                            return <AddCard title={s.title} location={s.location}  price={s.price} millage={s.millage}  imageUrl={s.imageUrl}/>
                        })
                    }
                </div>
            </section>
        );
    }
}
export default Home