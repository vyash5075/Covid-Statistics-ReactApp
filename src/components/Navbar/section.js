import React from 'react';

import { Link } from 'react-router-dom';

class Section extends React.Component{
render(){
    return(
        
        <div>
            <Link to="/"/>
            <Link to="/india" />
            <Link to="/symptoms"/>
            <Link to="/news" />
            <Link to="/aboutus"/>
        </div>
       
        
    )
}
}
export default Section;