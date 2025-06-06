import { useState } from "react";
function Us4(){
    const [data,setData]=useState({});
    function handleChange(e){
        const {name,value}=e.target;
        setData({...data,[name]:value});

        alert(data.fname+data.lname+data.e+data.city)
    }
    return(
        <div>
            <form onSubmit={handleChange}>
                <fieldset>
                    <legend>form</legend>
            Name:<input name="fname" onChange={handleChange}/><br></br><br></br>

            LastName:<input name="lname" onChange={handleChange}/><br></br><br></br>

            email:<input type='email'name="ee"  onChange={handleChange}/><br></br><br></br>

            password:<input type='password' name="psw "onChange={handleChange}/><br></br><br></br>

            message:<input type='text'name="msg"  onChange={handleChange}/><br></br><br></br>

            Gender:<input type='radio'name='h' onChange={handleChange}/> female
            <input type='radio'name='h' onChange={handleChange}/> male


            <h1>{data.fname} {data.lname} {data.ee} {data.msg} </h1>
            </fieldset>
        </form>
        </div>
        
    )
}
export default Us4