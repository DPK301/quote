import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Quotegenerator({data}) {
console.log(data);
   return (
    <div> 
       <div style={{width:'900px'}} className='text-center mx-auto container'>
        <p style={{fontSize:'30px'}}><b>{data.quote}</b></p>
        <div style={{width:'300px'}} className='text-end container'><p><mark><i>-{data.author}</i></mark>
          </p></div>
       </div>
    </div>
  )
}

export default Quotegenerator