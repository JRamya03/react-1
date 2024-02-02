import React, {Component} from 'react';

export default class Home extends Component{

 constructor(){
    super()
  this.state={
    name:"raji",
    age:40
  }
 }
    render(){

        const update=()=>{
            this.setState({name:"ramya",age:30})
        }
        const man=()=>{
        //   this.setState({age:23,name:"vicky"})
        this.setState({age:23})
        }
        return(
            <div>
              <h1>{this.state.name}</h1>
              <h1>{this.state.age}</h1>
              {/* <button onClick={update}>click</button> */}
              {/* <button onClick={man} > change </button> */}
              <button onClick={()=>this.setState({age:55})}> tap </button>
            </div>
        )
    }
}