import {Routes, Route} from "react-router-dom"
import { PageLayout, ProgramaAz, EsporteOri} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<ProgramaAz/>}/>
                <Route path="/orientacao" element={<EsporteOri/>}/>
            </Route>
        </Routes>
    )
}