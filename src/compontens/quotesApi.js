import React from 'react';
import Axios from 'axios';
import { WiredCard, WiredButton } from 'react-wired-elements';




export default (props) => {
    
    
    const url = `https://favqs.com/api/qotd`;

    const getData = async () => {
        //fetch data from a url
        const result = await Axios.get(url)
           props.setQuote(result.data.quote)
           console.log(result.data)
                
          }


          return (
              
              // wired-element button that return the result from the api
            <div>
             <WiredCard fill="#F5F5F5" elevation={3}>
            <WiredButton onClick={getData}>Click</WiredButton>
            </WiredCard>
           
                
            </div>
            
  

        
           

           
            
       
    )
   

                
 }
