// Code Invitation Component Here
import React from 'react';
class Invitation extends React.Component{
    render(){
        return(
           <div class="invitation">
                <h1>You've been invited!</h1>
                <div>{this.props.children}</div>
           </div>
        )
    }
}

export default Invitation