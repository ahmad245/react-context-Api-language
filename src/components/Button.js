import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext';
class Button extends Component{

   
    render(){
      return (

        <ColorContext.Consumer>
         {(color)=>{
          return   (
            <button className={`ui button ${ color ? 'red' :'primary'}`} >
            <LanguageContext.Consumer>
                {(lan)=> lan.language == 'en' ? 'Submit' : 'Saam'}
            </LanguageContext.Consumer>
            
            </button>
          );
         
         }}
        </ColorContext.Consumer>
          
      )
    } 
}

export default Button;