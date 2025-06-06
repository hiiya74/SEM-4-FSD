import { useState } from "react";
function Us3(){
    const[name,setName]=useState("welcome to Lj");
    const[color,setColor]=useState("red")
    const[hideText,setHide]=useState("React JS hooks")

    function showhide(){setHide("");}
    function changename(){
        if(name==="welcome to Lj"){
            setName("hiya")
        }
        else{
            setName("welcome to Lj")
        }
    }
    function changeColor(){
        if(color==="red")
        {
            setColor("blue")
        }
        else
        {
            setColor("red")
        }
    }
        return(
            <div>
                <button onClick={showhide}>Find</button>
                <button onClick={changename}>Change</button>
                <button onClick={changeColor}>change color</button>
                <h1 style={{color:color}}>{name}</h1>
                <h2>{hideText}</h2>

            </div>
        )
}
export default Us3
    