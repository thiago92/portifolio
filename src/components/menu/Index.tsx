import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/img/logos/logo-bg.png";
import { useTranslation } from "react-i18next";
import MenuData from "../../data/menu/menu.data";
import { MenuInterface } from "../../interface/menu.interface";
import { Link } from "react-router-dom";

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hoveredText, setHoveredText] = useState<string>("")

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const { t } = useTranslation()

    return (
        <>
            <div className="flex justify-center items-end flex-col cursor-pointer group" onClick={toggleMenu}>
                <div className="border-b-4 w-8 group-hover:w-16 transition-all duration-700"></div>
                <div className="border-b-4 mt-3 w-12 group-hover:w-16 transition-all duration-700"></div>
                <div className="border-b-4 mt-3 w-16"></div>
            </div>

            <nav
                className={`
                    fixed 
                    top-0 
                    left-0 
                    w-full
                    bg-black 
                    text-white 
                    transform ${
                        isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    } transition-transform duration-500 h-screen`}
            >
                <div className="flex p-8">
                    <div className="flex-1">
                        <img className="w-32 lg:w-44 rounded-full border-4 border-yellow-600 hover:rotate-45 transition duration-300" src={logo} alt="logo" />
                    </div>
                    <div className="flex-1 flex justify-end items-start" onClick={toggleMenu}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="text-gray-500 hover:text-gray-300 hover:scale-125 hover:rotate-90 transition duration-300 cursor-pointer"
                            size="4x"
                        />
                    </div>
                </div>
                <ul className="flex flex-col w-full items-center justify-around z-20">
                    {MenuData.map((data: MenuInterface, index: number) => 
                        <li
                            key={index}
                            className="hover:text-yellow-500 cursor-pointer z-20"
                            onMouseEnter={() => setHoveredText(data.label)}
                            onMouseLeave={() => setHoveredText("")}
                            onClick={toggleMenu}
                            >
                                <Link to={data.to}>
                                    {t(data.translation)}
                                </Link>
                        </li>
                    )}
                </ul>
                <div
                    className="w-full text-center text-bg transition-all duration-1000 ease-out z-10"
                    style={{
                        letterSpacing: hoveredText ? "0px" : "50px", 
                        opacity: hoveredText ? 0.1 : 0, 
                    }}
                    >
                    {t(hoveredText)}
                </div>
            </nav>
        </>
    )
}

