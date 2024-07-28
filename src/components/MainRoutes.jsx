import { HashRouter, Route, Routes } from "react-router-dom"
import FormularioLogin from "./FormularioLogin"
import LoginComSucesso from "./LoginComSucesso"

const MainRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<FormularioLogin />} />
                <Route path="/loginSucesso" element={<LoginComSucesso />} />
            </Routes>
        </HashRouter>
    )
}

export default MainRoutes