import React from 'react';
import {Link} from 'react-router-dom';
class List extends React.Component{
    state={
        toggle:false
    }
    menuToggle=()=>{
this.setState({toggle:!this.state.toggle})
    }
render(){   const {toggle}=this.state;
    return(
     
        <>
       
            
            <ul className={toggle?"toggle":""}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/india">India Stats</Link></li>
                <li><Link to="/symptoms">Symptoms</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
                {/* <li className="close" onClick={this.menuToggle}>X</li> */}
            </ul>
            {/* <div className="menu" onClick={this.menuToggle}>Menu</div> */}
            {/* Link */}
        </>
    )
}
}
export default List;