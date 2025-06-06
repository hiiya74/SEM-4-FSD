import { useState } from "react";
function Us1()
{
    const[count,SetCount]=useState(0);
    function handleCount(){
        SetCount(count+1);
    }
    function decrease(){
        SetCount(count-1);
    }
    return(
        <div>
            <p>clicked{count}times</p>
            <button onClick={handleCount}>Click</button>
            <p>clicked to minus</p>
            <button onClick={decrease}>Click</button>
        </div>
    )
}
export default Us1
