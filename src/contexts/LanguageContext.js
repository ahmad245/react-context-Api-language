import React, { Component } from 'react';


const Context= React.createContext('en');

export class LanguageStore extends Component{
   
    state={language:'en'};

   onLanguageChange=(language)=>{
      this.setState({language});
   }

   render()
   {
       return (
           <Context.Provider value={{...this.state,onLanguageChange:this.onLanguageChange}}>
               {this.props.children}
           </Context.Provider>
       )
   }
}
export default Context;