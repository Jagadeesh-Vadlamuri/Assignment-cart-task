import React, {useContext, useState} from "react";
import './CardBody.css';
import {store} from '../App';

const CardBody = ({data}) => {
  const [counter, setCount] = useContext(store)
  const [text, setText] = useState(data)

  // console.log(setText())
  // console.log(setCount(counter+1))
  const clickHandler = (index) =>{  
      
      let sample = text.filter((item)=>index+1==item.id)
      if(sample && text[index].buttonText=="Add to cart"){
        setCount(counter+1)
        text[index].buttonText="Remove from Cart"
      }
      else if(sample && text[index].buttonText=="Remove from Cart"){
        setCount(counter-1)
        text[index].buttonText="Add to cart"
      }
  }
  return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">              
            {text.map((item, index) => {
              return (
                <div className="col mb-5" >
                  <div className="card h-100">
                    <div
                      className="badge bg-light text-white position-static"
                      style={{top: '0.5rem', right: '0.5em'}}
                      
                    >
                     <img
                      className="card-img-top"
                      src={item.imagePath}
                      alt="..."
                      
                    />
                    <div className="card-body p-4" key={index}>
                      <div className="text-center text-dark" >
                        <h5 className="fw-bolder">{item.name}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          {item.firstPrice}
                        </span>
                        {item.secondPrice}
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                      <div className="text-center">
                        <a className={item.buttonText=="Remove from Cart" ? "btn btn-outline-dark bg-danger text-white mt-auto" : "btn btn-outline-dark mt-auto"} onClick={()=>clickHandler(index)} href="#">
                          {item.buttonText}
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              );
            })} 
          </div>
        </div>
      </section>
  );
};

export default CardBody;
