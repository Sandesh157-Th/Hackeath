import  {useState} from 'react';

 export default function CounterApp(){


   
   const [counter , setCounter]= useState(0);

   function CounterApp(){
    
    if(counter<20)
    {
       
        setCounter(counter+1);
    }
   }

   function CounterAppRem(){
    if(counter>0)
    {
        setCounter(counter-1);
    }
   }



    return (<>

    <div>
        <h1>counter: {counter}</h1>
        <button onClick={CounterApp}>CounterApp</button> <br/>
        <button onClick={CounterAppRem}>CounterAppRem</button>
    </div>
     

    </>)

}