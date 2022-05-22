import React, { useState } from 'react'

const Register = () => {
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    var [cpassword,setCpassword]=useState("")

    const database=()=>{
        const data={"Name":name,"Email":email,"Username":username,"Password":password,"Cpassword":cpassword}
        console.log(data)




    }
    
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl">
                <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}}  placeholder="Enter Name" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl">
                    <label for="" class="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" type="email" name="" id="" class="form-control"/>
                </div>
                <div class="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter Username" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl">
                <label for="" class="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" type="password" name="" id="" class="form-control"/>

                </div>
                <div class="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl">
                    <label for="" class="form-label">Confirm Password</label>
                    <input onChange={(e)=>{setCpassword(e.target.value)}} placeholder="Enter Confirm Password" type="password" name="" id="" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={database} class="btn btn-primary">REGISTER</button>
                </div>
                <div class="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl">
                    <a href="/">Back To Login</a>
                </div>
            </div>

        </div>
    </div>
</div>


</div>



    
  )
}

export default Register