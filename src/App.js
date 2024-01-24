import React from "react";
import First from "./Components/First";
let first= document.querySelector(".hii");
// first.innerHTML="yesIt also work"
const App =()=>{
 return(
    <div>
        
<p>hi there</p>
<h1>hey how are you</h1>
<First
name="apple"
color="green"
price="200"
 />
    </div>
 )
}
export default App;