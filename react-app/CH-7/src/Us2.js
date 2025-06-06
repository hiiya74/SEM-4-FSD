import { useState } from "react";
import homeImage from './download1.png';
import logo from './images.png';

function Us2(){
    const [image1, setImage] = useState(homeImage);
    function changeImage(){
        if(image1===homeImage){
            setImage(logo)
        }
        else{
            setImage(homeImage)
        }}
        return(
            <div>
                <img src={image1} alt=""/>
                <button onClick={changeImage}>click</button>

            </div>
        )
}
export default Us2