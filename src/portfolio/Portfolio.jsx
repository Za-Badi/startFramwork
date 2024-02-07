import React from 'react'

import  poer1 from '../assets/img/poert1.png'
import  poer2 from '../assets/img/port2.png'
import  poer3 from '../assets/img/port3.png'

export default function Portfolio() {
  return (
    <div>
        <h2 className=' text-center fw-bolder fs-1 mainColorRev pt-5'>PORTFOLIO COMPONENT</h2>

      <div className="container py-4">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img alt="" className="w-100 rounded-3" src={poer1}/>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <div className='layer'><i className="layericon text-white fa-solid fa-plus fa-6x"></i></div>
          
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img alt="" className="w-100 rounded-3" src={poer2}/>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <div className='layer'><i className="layericon text-white fa-solid fa-plus fa-6x"></i></div>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img alt="" className="w-100 rounded-3" src={poer3}/>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <div className='layer'><i className="layericon text-white fa-solid fa-plus fa-6x"></i></div>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img alt="" className="w-100 rounded-3" src={poer1}/>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <div className='layer'><i className="layericon text-white fa-solid fa-plus fa-6x"></i></div>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img alt="" className="w-100 rounded-3" src={poer2}/>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <div className='layer'><i className="layericon text-white fa-solid fa-plus fa-6x"></i></div>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img alt="" className="w-100 rounded-3" src={poer3}/>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <div className='layer'><i className="layericon text-white fa-solid fa-plus fa-6x"></i></div>
            </div>
            </div>
          </div>
        </div>
        
      </div>  
    </div>
  )
}
