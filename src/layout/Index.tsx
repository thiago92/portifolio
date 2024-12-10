import { Outlet } from 'react-router-dom';
import Header from '../components/header/Index';
import Footer from '../components/footer/Index';

export default function Main() {
    return (
        <div className="relative">
            <div className="flex flex-col h-screen">
                <header className="flex-none z-20">
                    <Header />
                </header>

                <main className="flex-grow overflow-auto z-10">
                    <Outlet />
                </main>

                <footer className="flex-none z-10">
                    <Footer />
                </footer>
            </div>
        </div>
    );
}
