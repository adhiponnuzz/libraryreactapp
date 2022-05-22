import React, { useState } from 'react'
import Navbar from './Navbar'

const Addbook = () => {
    var [bookname,setBookname]=useState("")
    var [author,setAuthor]=useState("")
    var [price,setPrice]=useState("")

    const subData=()=>{

        const data={"BookName":bookname,"Author":author,"Price":price}
        console.log(data)




    }

  return (
    <div>
        <Navbar/>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Book Name</label>
                    <input onChange={(e)=>{setBookname(e.target.value)}} placeholder="Enter BookName" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Author</label>
                    <input onChange={(e)=>{setAuthor(e.target.value)}} placeholder="Enter Author" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter Price" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} class="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Addbook