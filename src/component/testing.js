import React from 'react';



class Umar extends React.Component {
    render () {
      const message = "Umar"
      const user2 = {
        name : "Asad",
        relationship : "Son"
    }
      return ( <div> 
          <h1>Hello {this.props.user.name}! Welcome to the screen</h1> 
          <div>
              <h1>Hello {user2.relationship}, {user2.name}!</h1>
          </div>
          
          </div>)
               
    }
  }

  export default Umar;
  export const MAX_VALUE = 100;