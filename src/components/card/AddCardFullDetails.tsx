import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

function AddCardFullDetails(): JSX.Element {
  let navigate = useNavigate();
  const location = useLocation();
  const [myArticle, setMyArticle] = useState<any>({})
  const {
    id,
    name,
    title,
    description,
    city,
    millage,
    yom,
    condition,
    company,
    capacity,
    contactnumber,
    image,
    price,
    isMyArticle
  } = location.state || {};

 

  useEffect(() => {
    const article = {
    "id":id,
    "name":name,
    "title":title,
    "description":description,
    "city":city,
    "millage":millage,
    "yom":yom,
    "condition":condition,
    "company":company,
    "capacity":capacity,
    "contactnumber":contactnumber,
    "image":image,
    "price":price,
    "isMyArticle":isMyArticle
    }
    console.log(id);
    setMyArticle(article)
}, []);


const deleteArticle = () => {
  const config = {
      headers: {
          'Authorization': JSON.parse(Cookies.get('token'))
      }
  }
  
  console.log("adwada");
  
  axios.delete(`http://localhost:8085/delete/myarticle/${id}`, config)
              .then(res => {
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                  });
                  //handleGetMyArticles();
              })
              .catch(err => {
                  Swal.fire({
                      title: 'Error!',
                      text: 'Something went wrong',
                      icon: 'error',
                      confirmButtonText: 'Cool'
                  })
              });
}



  return (
    <div className="flex items-center justify-center mt-24">
      <section className={'w-fit p-10 border shadow-xl rounded-xl min-h-[900px] flex flex-col items-center'}>
        {/* Title */}
        <div className={'text-4xl font-bold text-center'}>{title}</div>

        {/* Details */}
        <div className={'mt-5'}>
          <div className='flex justify-center flex-wrap'>
            {image && image.img1 && (
              <Zoom>
                <img
                  src={`http://localhost:8085/uploads/${image.img1}`}
                  alt={title}
                  className={'mb-4 w-[195px] h-[195px] object-cover ml-5 border-8'}
                />
              </Zoom>
            )}
            {image && image.img2 && (
              <Zoom>
                <img
                  src={`http://localhost:8085/uploads/${image.img2}`}
                  alt={title}
                  className={'mb-4 w-[195px] h-[195px] object-cover ml-5 border-8'}
                />
              </Zoom>
            )}
            {image && image.img3 && (
              <Zoom>
                <img
                  src={`http://localhost:8085/uploads/${image.img3}`}
                  alt={title}
                  className={'mb-4 w-[195px] h-[195px] object-cover ml-5 border-8'}
                />
              </Zoom>
            )}
            {image && image.img4 && (
              <Zoom>
                <img
                  src={`http://localhost:8085/uploads/${image.img4}`}
                  alt={title}
                  className={'mb-4 w-[195px] h-[195px] object-cover ml-5 border-8'}
                />
              </Zoom>
            )}
          </div>
          <div className="flex flex-col items-center text-xl gap-4 mt-10">
            <div className="flex gap-4 w-full">
              <div className="flex-1 flex flex-col justify-center gap-4 my-14">
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Millage:</strong> {millage}</p>
                <p style={{ width: 320 }}><strong>Description:</strong><br /> {description}</p>
              </div>
              <div className="w-px bg-gray-300 h-[300px] self-center"></div>
              <div className="flex-1 flex flex-col justify-center gap-4">
                <p><strong>Year of Manufacture:</strong> {yom}</p>
                <p><strong>Condition:</strong> {condition}</p>
                <p><strong>Company:</strong> {company}</p>
                <p><strong>Engine Capacity:</strong> {capacity}</p>
                <p>
                  <strong>Contact Number:</strong>
                  <a href={`tel:${contactnumber}`} className="text-blue-500 hover:underline ml-2">{contactnumber}</a>
                </p>
                <p><strong>Price:</strong> {price}</p>
              </div>
            </div>
           
              <div className="flex justify-center w-full mt-10 gap-8">
               <button
                 onClick={() => navigate('/post', {state:{article:myArticle}})}

                 className={`${isMyArticle ? "block" : "hidden"} bg-green-600 p-4 text-white w-32 flex items-center justify-center`}>
                 <i className="fas fa-edit mr-2"></i>
                 Edit
             </button>
             <button onClick={deleteArticle} className={`${isMyArticle ? "block" : "hidden"} bg-red-600 p-2 text-white w-32 flex items-center justify-center`}>
                 <i className="fas fa-trash-alt mr-2"></i>
                 Delete
             </button>
              </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddCardFullDetails;
