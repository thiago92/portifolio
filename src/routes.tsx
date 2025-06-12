import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import Main from "./layout/Index"
import Home from "./pages/home/Index"
import Contact from "./pages/contact/Index"
import Portfolio from "./pages/portifolio/Index"
import About from "./pages/abaout/Index"

export default function AppRouter() {
    return <>
        <HashRouter>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={ <Home />} />
                        <Route path="contact" element={ <Contact />} />
                        <Route path="portfolio" element={ <Portfolio />} />
                        <Route path="about" element={ <About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </HashRouter>
    </>
  }