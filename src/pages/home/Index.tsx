import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faLinkedin, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { Typewriter } from "react-simple-typewriter"
import words from "../../data/typewriter/words"
import Particle from "../../components/animate-background/Index"
import { useTranslation } from "react-i18next"

export default function Home() {

    const { t } = useTranslation()
    return (
        <>
            <Particle />
            <section className="relative flex justify-between z-10">
                <div className="flex justify-center items-start gap-8 flex-col flex-1 pl-10">
                    <FontAwesomeIcon icon={faInstagram} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="2x"/>
                    <FontAwesomeIcon icon={faFacebook} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="2x"/>
                    <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="2x"/>
                </div>
                <div className="flex flex-col flex-1 mx-2 justify-center items-center p-4">
                    <h2 className="text-center text-gray-300">
                        <span className="text-yellow-600">Thiago</span> Silva Souza
                    </h2>
                    <p className="text-gray-300 mt-8">
                        {t('welcome')}
                    </p>
                    <p className="text-gray-300 mt-8">
                        {t('Im')} <span className="text-yellow-600">
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
                <div className="flex justify-center items-end gap-10 flex-col flex-1 pr-10">
                    <FontAwesomeIcon icon={faTelegram} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="3x"/>
                    <FontAwesomeIcon icon={faWhatsapp} className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" size="3x"/>
                </div>
            </section>
        </>
    )
}