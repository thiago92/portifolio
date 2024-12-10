import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./layout/Index"
import Home from "./pages/home/Index"

export default function AppRouter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={ <Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  }