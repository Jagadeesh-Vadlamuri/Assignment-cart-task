import React, {useState, createContext} from 'react';
import HeaderBar from './Components/HeaderBar';
import Banner from './Components/Banner';
import CardBody from './Components/CardBody';
import Footer from './Components/Footer';
import './css/styles.css';
import './App.css';

export const store = React.createContext()

const App = () => {
  const [counter, setCount] = useState(0);
  // const [datum, setDatum] = useState(data)
  const data = [
    {
      id:1,
      imagePath : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      firstPrice: "$40.00",
      secondPrice: "$80.00",
      buttonText: "Add to cart"
    },
    {
      id:2,
      imagePath : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special Item",
      firstPrice: "$20.00",
      secondPrice: "$18.00",
      buttonText: "Add to cart"
    },
    {
      id:3,
      imagePath : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale Item",
      firstPrice: "$50.00",
      secondPrice: "$25.00",
      buttonText: "Add to cart"
    },
    {
      id:4,
      imagePath : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      firstPrice: "$40.00",
      secondPrice: "-",
      buttonText: "Add to cart"
    },
    {
      id:5,
      imagePath : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale Item",
      firstPrice: "$50.00",
      secondPrice: "$25.00",
      buttonText: "Add to cart"
    },
    {
      id:6,
      imagePath : "https://dummyimage.com/45 0x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      firstPrice: "$40.00",
      secondPrice: "$80.00",
      buttonText: "Add to cart"
    },
    {
      id:7,
      imagePath : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special Item",
      firstPrice: "$60.00",
      secondPrice: "$140.00",
      buttonText: "Add to cart"
    },
    {
      id:8,
      imagePath : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      firstPrice: "$40.00",
      secondPrice: "$80.00",
      buttonText: "Add to cart"
    }
  ]
  return (
    <store.Provider value={[counter, setCount]}>
      <HeaderBar/>
      <Banner />
      <CardBody data={data}/>
      <Footer />
    </store.Provider>
  )
}

export default App