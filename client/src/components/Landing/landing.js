import React from 'react';
import Hoc from '../../hoc/hoc';
const landing = props => (
    <Hoc>
        <div className="row  flow-text white-text center-align" 
        style={{fontFamily:"'Roboto Condensed', sans-serif"}} >
            <h1>Emaily</h1>
            <h5>Create and manage client feedback through surveys </h5>
            <a className="btn-large" href="/auth/google">
                Signin with Google
            </a>
        </div>
        <div className="row white pad-top">
            <div className="col s4">
             <div className="center promo">
             <i class="large material-icons">flash_on</i>   
             <p class="promo-caption">Get quick feedback</p>
             <p class="light center">Test text for you</p>
             </div>
            </div>
            <div className="col s4">    
            <div className="center promo">
             <i class="large material-icons">grade</i>   
             <p class="promo-caption">Get quick feedback</p>
             <p class="light center"></p> 
             </div>
            </div>
            <div className="col s4">    
            <div className="center promo">
             <i class="large material-icons">group</i>   
             <p class="promo-caption">Get quick feedback</p>
             <p class="light center"></p>
             </div>
            </div>
        </div>
        
    </Hoc>
)

export default landing;