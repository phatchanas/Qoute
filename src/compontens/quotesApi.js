import React, {useState} from 'react';
import Axios from 'axios';
import { WiredCard, WiredButton } from 'react-wired-elements';





export default (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const url = `https://favqs.com/api/qotd`;

    const getData = async () => {
        //fetch data from a url
        setIsLoading(true)
        const result = await Axios.get(url)
        .then(result => {
            props.setQuote(result.data.quote)   

            setIsLoading(false)        
            }
        )
        .catch(error => {
            setIsLoading(false)   
            console.warn(error)
       })
        }   

          return (
              
              // wired-element button that return the result from the api
            <div>
                <WiredCard fill="#F5F5F5" elevation={3}>
                <WiredButton onClick={getData}>Click</WiredButton>
                </WiredCard>
                {isLoading && <h1>Loading..</h1>}   
            </div>
            
  

        
           

           
            
       
    )
   

                
 }
