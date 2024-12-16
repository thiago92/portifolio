import { Outlet } from 'react-router-dom';
import Header from '../components/header/Index';
import Footer from '../components/footer/Index';

export default function Main() {
    return (
        <div className="relative bg-black">
            <div className="flex flex-col h-screen">
                <header className="z-20">
                    <Header />
                </header>

                <main className=" flex-1 z-10">
                    <Outlet />
                </main>

                <footer className="z-10">
                    <Footer />
                </footer>
            </div>
        </div>
    );
}
