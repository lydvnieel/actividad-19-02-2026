import { Navigate, Route, Routes } from "react-router-dom";
import Response200 from "../responses/Response200"
import Error403 from "../responses/Error403"
import Error401 from "../responses/Error401"

export default function PublicRouter(setSession){
    return (<>
        <Routes>
            <Route path = "/" element = {<Navigate to = "/login" />} />
            <Route path = "/login" element = {<Response200 />}/>
            <Route path = "/home" element = {<Error403 />}/>
            <Route path =  "/users" element = {<Navigate to = "/home"/>}/>
            <Route path = "/register/user" element = {<Navigate to = "/"/>} />
            <Route path = "/auth/*" element = {<Error401 />}/>

        </Routes>
    
    </>);
}