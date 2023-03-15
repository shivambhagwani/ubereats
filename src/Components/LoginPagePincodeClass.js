import React, { Component } from 'react'

export default class LoginPagePincodeClass extends Component {

    constructor(props){
        super(props);
        this.state = { pincode: '' };
      }
     
      handleChange = event => {
        this.setState({ pincode: event.target.value });
      };

  render() {
    return (
        <div className='container' style={{alignSelf:"center", width:"50%", marginTop:"40px"}}>
            <h1>Order food to your door</h1>
            <form>
            <div className='form-group'>
            <input
            placeholder='Pincode'
            type="text"
            name="pincode"
            className='form-control'
            style={{width:"45%"}}
            value={this.state.pincode}
            onChange={this.handleChange}
         />
                
            </div>
            <button 
                    type="submit" 
                    className="btn form-control-lg" style={{backgroundColor:"black", 
                                            color:'white', 
                                            fontWeight:'bold',
                                            marginTop:'10px'}}>Find Food
            </button>
       </form>

       <div>
        Or <a href='/login' style={{textDecoration:"none", color:"red"}}>LogIn</a> to see your saved addresses...
       </div>

        </div>
        
       
    )
  }
}
