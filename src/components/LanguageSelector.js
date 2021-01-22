import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component{
    static contextType=LanguageContext
    render(){
        return(
            <div>
            <i onClick={()=>this.context.onLanguageChange('en')} className="flag us"></i>
            <i onClick={()=>this.context.onLanguageChange('nl')} className="flag nl"></i>
  
          </div>
        )
    }
}

export default LanguageSelector;