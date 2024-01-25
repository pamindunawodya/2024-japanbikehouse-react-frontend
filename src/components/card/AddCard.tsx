
import React  from 'react';

interface Props {
    title?: string,
    location?: string,
    price?: number,
    millage?:string,
    id:number,
    imageUrl:string
}



class Card extends React.Component<Props, any> {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
            <div className={'my-5 flex justify-center'}>
                <div className={'w-5/6 p-5 border-solid border-2 m-2 flex items-center'}>
                    <div className={'flex-1'}>
                        <h1 className={'text-3xl font-bold'}>{this.props.title}</h1>
                        <p className={'my-2 text-xl'}>Location:  {this.props.location}</p>
                        <p className={'my-2 text-xl'}>price:       {this.props.price}</p>
                        <p className={'my-2 text-[20px]'}>millage:  {this.props.millage}</p>
                        <p className={'my-5 text-[28px]'}>{this.props.id}</p>
                        <button className={'bg-green-600 p-2 text-white'}>Read More...</button>
                    </div>
                    <img src={this.props.imageUrl} alt={this.props.title} className={'mb-4 w-fit h-44 object-cover ml-sm-5 border-2'} />
                </div>
            </div>

        );
    }
}

export default Card;
