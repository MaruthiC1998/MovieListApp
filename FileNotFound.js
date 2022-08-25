import { Link } from "react-router-dom";

const FileNotFound = () => {
    return ( 
        <div>
            <h1>404 File not Found</h1>
        <Link to="/">Go to Home Page</Link>
        </div>
        
     );
}
 
export default FileNotFound;