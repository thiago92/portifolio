import logo from "../../../public/logo-bg.png"
import Menu from "../menu/Index"

export default function Header() {
    return (
        <>
            <section className="relative flex justify-between z-10">
                <div className="flex w-full mx-2 p-8">
                    <div className="flex-1">
                        <img className="w-24 lg:w-40 rounded-full border-4 border-yellow-600 hover:rotate-45 transition duration-300" src={logo} alt="logo" />
                    </div>
                    <div className="flex-1 flex justify-end items-start">
                        <Menu />
                    </div>
                </div>
            </section>
        </>
    )
}