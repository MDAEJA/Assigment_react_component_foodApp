import React from 'react';

function Main(props){
    return(
        <>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',padding:'2rem 2rem',textAlign:'center',backgroundColor:'#1F2937',color
    :'#9CA3EF',fontStyle:'oblique',borderRadius:'20px'}}>
            <h3>{props.description}</h3>
            <p style={{color:'white'}}>{props.author}</p>
        </div>
        </>
    )
}

export default Main;