import React from 'react';
 const LoginPage = (props)=>(
    
    
        <div class="container login" >
        
        <div class="card bg-light mb-3">
       
          <div class="card-header"><h3>Log In Page</h3> </div>
          <div class="card-body">
            <p>click here to login</p>
  
            <div
              class="btn-toolbar justify-content-between"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group" role="group" aria-label="First group">
              <button className="btn btn-primary" onClick={()=>{
                props.history.push('/')
        }
}>Go TO Dashboard</button>
              </div>
  
              
            </div>
          </div>
        </div>
      </div>
)
 
 export default LoginPage;