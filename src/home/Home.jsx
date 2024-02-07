import React from 'react'
import { ReactComponent as Pic} from '../assets/img/avataaars.svg'

export default function Home() {
  return (
    <div className=' home d-flex flex-column m-auto justify-content-center '>        
     
        <Pic  className="h-50"/>
        <h2 className='pt-4 text-center text-white fw-bolder fs-1'>START FRAMEWORK</h2>
       
        <div  className="d-flex align-items-center justify-content-center mb-3">
            <div  className="line me-3" ></div>
            <i  className="fa-solid fa-star text-white"></i>
            <div className="line ms-3" > 
            </div>
        </div>
        <h6 className='text-center text-white fw-light'>Graphic Artist - Web Designer - Illustrator</h6>


    </div>
  )
}
