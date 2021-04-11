import React from 'react'
import back from "../resources/work6.jpg";
import './Home.css'

class Home extends React.Component
{
    render() {
        return(
            <div>
                <img style={{width:"100%"}} src={back}></img>
                <div class="transbox">
                <p>Plan Your Work</p>
                <p style={{textAlign: "center", fontSize: "40px"}}>Be Efficient!!</p>
            
                </div>
            </div>
        )
    }
}

export default Home