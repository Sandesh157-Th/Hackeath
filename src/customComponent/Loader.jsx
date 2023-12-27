import React from 'react';

class MycomponentS extends React.Component{

    state ={
        First : 'loading',
        Second: 'loading',
        Third :'loading',
        Fourth: 'loading',
        Finished: 'finished',
    

    };

    constructor(){
        super();
        setTimeout(()=> {
            this.setState({First: '25% completed..'});
        },2000);

        setTimeout(()=> {
            this.setState({Second: '50% completed..'});
        },4000);

        setTimeout(()=> {
            this.setState({Third: '75% completed..'});
        },6000);

        // setTimeout(()=> {
        //     this.setState({Fourth: 'Finished...'});
        // },8000);

        setTimeout(()=> {
            this.setState((state)=>({
                ...state,
                Fourth: "Finished"

            }))
        },8000);
        

       


      


    }
    render(){
        const{First,Second,Third,Fourth}=this.state;
        return(<>
        <div className='ml-12'>
    <ul className='flex justify-center flex-col gap-4 '>
        {Object.keys(this.state).filter((i)=> i !="Finished").map((i)=>(
        
        <li key={i}> {i}: {this.state[i]}</li>
       ))}
    </ul>
        </div>
        

        </>)
    }
}

export default MycomponentS;