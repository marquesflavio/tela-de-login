import { HashRouter, Route, Routes } from "react-router-dom"
import FormularioLogin from "./FormularioLogin"
import HomePage from "./HomePage"

const MainRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<FormularioLogin />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </HashRouter>
    )
}

export default MainRoutes