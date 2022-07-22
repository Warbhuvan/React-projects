import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return <setion>
  <div className='title'>
    <h2>Ours tours</h2>
    <div className='underline'></div>
  </div>
  <div>
    {
      tours.map((tour)=>{
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          )
      })
    }
  </div>
</setion>

  }
export default Tours;
