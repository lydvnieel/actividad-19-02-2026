import { Navigate, Route, Routes } from "react-router-dom";
import Response200 from "../responses/Response200";
import Response201 from "../responses/Response201";
import Error401 from "../responses/Error401";
import Error403 from "../responses/Error403";

export default function AuthRouter(){
    return(<>
        <Routes>
            <Route path = "/" element = {<Navigate to = "/home" />} />
            <Route path = "/home" element = {<Response200/>} />
            <Route path = "/users" element = {<Error401 />} />
            <Route path = "/auth/*" element = {<Response201 />} />
            <Route path = "/*" element = {<Error403 />} />
        </Routes>
    
    </>)
}