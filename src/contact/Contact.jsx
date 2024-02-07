import React from 'react';
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
        
        <h2 className=' text-center fw-bolder fs-1 mainColorRev pt-5'>CONATCT SECTION</h2>
        <div  className=" d-flex align-items-center justify-content-center mb-3 pb-5">
           <div className="line me-3" style={{  backgroundColor:"#2c3e50"}} ></div>
           <i  className="fa-solid fa-star " style={{  color:"#2c3e50"}} ></i>
           <div className="line ms-3 " style={{  backgroundColor:"#2c3e50"}}> 
           </div>
       </div>
        <form className={style.form}>
        <div className="mb-5">
          <input
            type="text"
            className={style.formControl}
            id="username"
            placeholder="User name"
          />

          <label htmlFor="username" className="form-label text-capitalize">
            User name:
          </label>
        </div>

        <div className="mb-5">

          <input
            type="number"
            className={style.formControl}
            id="userage"
            placeholder="User Age"
          />
                    <label htmlFor="userage" className="form-label text-capitalize">
            User Age:
          </label>
        </div>

        <div className="mb-5">
          <input
            type="email"
            className={style.formControl}
            id="useremail"
            placeholder="User Email"
          />
          <label htmlFor="useremail" className="form-label text-capitalize">
            User Email:
          </label>
        </div>

        <div className="mb-5">
          <input
            type="password"
            className={style.formControl}
            id="userpassword"
            placeholder="User Password"
          />
          <label htmlFor="userpassword" className="form-label text-capitalize">
            User Password:
          </label>
        </div>

        <button type="submit" className="btn bg-color text-white mt-4">
          Send message
        </button>
      </form>
      
    </div>
  )
}
