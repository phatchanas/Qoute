import React from 'react';
import Axios from 'axios';

export default (props) => {
    
    
    const url = `https://favqs.com/api/qotd`;

    const getData = async () => {
        const result = await Axios.get(url)
        console.log(result.data.quote.body)
       
    }
    
        return (
        <>
            <h1 onClick={getData}>CLICK HERE</h1>
        </>
    )
   

                
 }
