import React from 'react';

function Header() {

    let headerStyle = {
        border:"1px solid red",
        borderRadius:"10px",
        padding:"4px",
        margin:"4px"
    }

    return (
        <div style={headerStyle}>
            <h1 style={{color:"red", textShadow:"2px 2px blue"}}>I am header!</h1>
        </div>
      );
}

export default Header;