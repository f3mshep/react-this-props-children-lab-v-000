// Code ThemedDecoration Component Here
import React from 'react';
class ThemedDecoration extends React.Component {
    render(){
        let newTheme =  this.props.theme
        const addedClass = React.Children.map(this.props.children, child =>{

            return( <div className= {newTheme} >{child}</div> )
        })
        return(
            <div>{addedClass}</div>
        )
    }
}

export default ThemedDecoration;