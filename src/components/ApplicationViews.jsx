import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Authorized } from "./Authorized"
import Home from "../pages/Home"
import { GameList } from "./game/GameList"
import { EventList } from "./event/EventList"


export const ApplicationViews = () => {

    return (<>
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/events" element={<EventList />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>)
}