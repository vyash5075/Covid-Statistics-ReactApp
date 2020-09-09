import React from 'react';
import Logo from './logo';
import List from './List';
class Header extends React.Component{
render(){
    return(
        <div>
        <header>
           
            <Logo/>
            <List/>
            
        </header>
       
        </div>
    )
}
}
export default Header;