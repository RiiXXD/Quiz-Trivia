


import {getQuiz} from "../Redux/action-type"
export const startQuiz=(name,difficulty,category,number)=>async(dispatch)=>{
    difficulty=difficulty.toLowerCase();

    try {  
    
    const res= await fetch(`https://quiz-json-server-3.onrender.com/results?difficulty=${difficulty}&category=${category}&_limit=${number||5}`)
    const data=await res.json();
    console.log(data,`https://quiz-json-server-3.onrender.com/results?difficulty=${difficulty}&category=${category}&_limit=${number}`);
    dispatch({type:getQuiz,payload:{data,name}});
    
    }
       
       catch(e){console.log(e);}
       // setRecipes((prevData) => [...prevData,...response.recipe]);
     }
   