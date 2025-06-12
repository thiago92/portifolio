import logo from "@/assets/img/logos/logo-bg.png"
import Menu from "../menu/Index"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <section className="relative flex justify-between z-10">
                <div className="flex w-full mx-2 p-8">
                    <div className="flex-1 cursor-pointer">
                        <Link to={'/'}>
                            <img className="w-24 lg:w-32 rounded-full border-4 border-yellow-600 hover:rotate-45 transition duration-300" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-end items-start">
                        <Menu />
                    </div>
                </div>
            </section>
        </>
    )
}