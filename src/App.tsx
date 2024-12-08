import { Route, Routes, useRoutes } from "react-router-dom"
import HomeRouter from "./routers/HomeRouter";

function App() {

    const HomeRouting = useRoutes(HomeRouter);

    return (
        <div>
            <Routes>
                <Route path="/*" element={HomeRouting} />
            </Routes>
        </div>
    )
}

export default App
