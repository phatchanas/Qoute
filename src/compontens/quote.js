import React from 'react'
 export default (props) => {
     
     return(
         //print out the quote and the author of the quote
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