import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faLinkedin, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"
import logo from "../../assets/logo/logo.png"
import { Typewriter } from "react-simple-typewriter"
import words from "../../data/typewriter/words"

export default function Home() {
    return (
        <>
            <section className="flex justify-between bg-gray-100 p-4 h-screen">
                <div className="flex flex-col flex-1 bg-black h-full mx-2 p-4">
                    <div className="flex-1">
                        <img className="w-48 rounded-full border-4 border-yellow-600 hover:rotate-45 transition duration-300" src={logo} alt="logo" />
                    </div>
                    <div className="flex justify-center items-start gap-8 flex-col flex-1">
                        <FontAwesomeIcon icon={faInstagram} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="2x"/>
                        <FontAwesomeIcon icon={faFacebook} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="2x"/>
                        <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="2x"/>
                    </div>
                    <div className="flex-1"></div>
                </div>
                <div className="flex flex-col flex-1 bg-black h-full mx-2 justify-center items-center p-4">
                    <h2 className="text-center text-gray-300">
                        <span className="text-yellow-600">Thiago</span> Silva Souza
                    </h2>
                    <p className="text-gray-300 mt-8">
                        I'm a <span className="text-yellow-600">
                            <Typewriter
                                words={words}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                </div>
                <div className="flex-1 bg-black h-full mx-2 p-4">
                    <div className="flex flex-col flex-1 bg-black h-full mx-2 p-4">
                        <div className="flex-1">
                            <div className="flex justify-top items-end flex-col cursor-pointer group">
                                <div className="border-b-4 w-8 group-hover:w-16 transition-all duration-900"></div>
                                <div className="border-b-4 mt-3 w-12 group-hover:w-16 transition-all duration-900"></div>
                                <div className="border-b-4 mt-3 w-16"></div>
                            </div>
                        </div>
                        <div className="flex justify-center items-end gap-10 flex-col flex-1">
                            <FontAwesomeIcon icon={faTelegram} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="3x"/>
                            <FontAwesomeIcon icon={faWhatsapp} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="3x"/>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>
            </section>
        </>
    )
}