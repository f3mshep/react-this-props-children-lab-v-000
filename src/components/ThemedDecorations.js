// Code ThemedDecoration Component Here
import React from 'react';
class ThemedDecoration extends React.Component {
    render(){
        const addedClass = React.Children.map(this.props.children, child =>{
            
            return( <div className="theme">{child}</div> )
        })
        return(
            <div>{addedClass}</div>
        )
    }
}

export default ThemedDecoration;