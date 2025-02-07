//  import React from "react";
 


 import {
    
    
    UserButton,
    SignInButton
  
    
  } from '@clerk/nextjs'

 export default function Home() {
 return (
    
    <div className="mx-96">
        
    <div className="flex-1 m-48 rounded-lg w-[400] h-[500]
    outline outline-8 outline-orange-400 text-red-600 text-6xl text-center  "><br/><SignInButton/><br/><br/><UserButton />
    
    

        
      
        
     </div>  </div>
  );
}
