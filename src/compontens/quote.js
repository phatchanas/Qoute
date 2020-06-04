import React from 'react'
 export default (props) => {
     
     return(
        <div>
            <h5>
                {props.quote.body}
                
            </h5>
            <h5>
                {props.quote.author && <p>- {props.quote.author}</p>}
            </h5>
            
         </div>
     )
 } 