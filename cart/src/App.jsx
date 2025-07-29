import { useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
function App() {
  

  
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Fitness tracking smartwatch with heart rate monitor",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 3,
      name: "Laptop Stand",
      description: "Ergonomic adjustable laptop stand for better posture",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 4,
      name: "USB-C Hub",
      description: "Multi-port USB-C hub with HDMI and SD card reader",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Portable waterproof Bluetooth speaker with rich sound",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 6,
      name: "Gaming Mouse",
      description: "Ergonomic gaming mouse with RGB lighting and programmable buttons",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      description: "Tactile mechanical keyboard with backlit keys",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 8,
      name: "Phone Case",
      description: "Protective phone case with wireless charging compatibility",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 9,
      name: "Power Bank",
      description: "10000mAh portable power bank with fast charging",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 10,
      name: "Webcam",
      description: "HD webcam with auto-focus and built-in microphone",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 11,
      name: "Portable SSD",
      description: "Fast and compact portable SSD for data storage",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=300&fit=crop",
      added: false
    },
    {
      id: 12,
      name: "Wireless Charger",
      description: "Qi-certified wireless charger for smartphones",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=300&fit=crop",
      added: false
    },
    
    // Add more products as needed
    {
      id: 13,
      name: "Sports Car",
      description: "High-performance sports car with sleek design",
      price: 89999.99,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
      added: false
    }

  ];
  
  const [data, setdata] = useState(products);
  

  const handleCardClick = (index) => {
    const updatedData = data.map((product, i) => {
      if (i === index) {
        return { ...product, added: !product.added };
      }
      return product;
    });
    setdata(updatedData);
  };


  return (
    <>
      <div className="bg-zinc-300 w-full  color-black-100 ">
    <Nav product={data} />
    <div className='flex flex-wrap items-center justify-center gap-4 p-4'>
{
    data.map((product, index) => (
      <Card key={index} index={index} product={product} clickHandler={handleCardClick} />
    ))}
    </div>
      </div>
    </>
  )
}

export default App
