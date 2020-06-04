import React from 'react';
import Axios from 'axios';


export default (props) => {
   
    const url = `https://favqs.com/api/qotd`;

    const getData = async () => {
        const result = await Axios.get(url)
           props.setQuote(result.data.quote)
           console.log(result.data)
                
          }


    
        return (
        <>
            <h1 onClick={getData}>CLICK HERE</h1>
            
        </>
    )
   

                
 }
