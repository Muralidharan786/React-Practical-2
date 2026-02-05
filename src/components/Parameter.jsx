import React from "react";
import {    BrowserRouter as Router,    Routes,    Route,    useParams,} from "react-router-dom";

function BlogPost() {    
    let { id } = useParams();   
    return (        
    <div style={{ fontSize: "50px" }}>            
    Now showing post {id}        
    </div>    
    );
}
function Home() {    
    return <h3>Home page</h3>;
}
export default BlogPost;
