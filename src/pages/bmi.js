import React, {useState} from "react";
export default function Bmi (){

    const [inputs, setInputs] = useState({name : '', height : 0.0, weight : 0.0})
    const { name, weight, height } = inputs; // Object  Destructuring


    
    return<>
    <form>
    <h1>체지방측정</h1>
    

    <div>
    <label><b>Username</b></label>
    <input type="text" name="name"/><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" name="weight" /><br />
    <button onClick={''}>BMI체크</button>
    </div> 
    </form>
    <div>결과<br/> 이름 : {name}<br/> 키 : {height}<br/> 몸무게 : {weight} </div>
   


    </>
}