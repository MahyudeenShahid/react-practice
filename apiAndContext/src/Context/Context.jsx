import React, { createContext, useContext, useState } from 'react'
import axios from '../Utils/axios'

export const userContext = createContext()

function Context(props) {

    const [data, setdata] = useState([]);
            const getdata = async () => {
                    try {
                        const response = await axios.get('/products');
                        console.log(response.data);
                        setdata(response.data);
                    } catch (error) {
                        console.error('Error fetching products:', error);
                    }
                }
    
  return ( 
    <userContext.Provider value={{ data, setdata , getdata } }>
    {props.children}
    </userContext.Provider>
  )
}

export default Context