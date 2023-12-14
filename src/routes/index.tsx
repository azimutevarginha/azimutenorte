import {Routes, Route} from "react-router-dom"
import { PageLayout, ProgramaAz} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<ProgramaAz/>}/>
            </Route>
        </Routes>
    )
}