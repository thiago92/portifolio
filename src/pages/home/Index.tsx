import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typewriter } from "react-simple-typewriter"
import words from "../../data/typewriter/words"
import Particle from "../../components/animate-background/Index"
import { useTranslation } from "react-i18next"
import { socialData, contactData } from "@/data/social/social.data"

export default function Home() {

    const { t } = useTranslation()

    return (
        <>
            <Particle />
            <section className="relative flex flex-col lg:flex-row justify-between z-10">
                <div className="flex justify-center items-start gap-8 lg:flex-col flex-1 lg:pl-10 order-2 lg:order-1 mt-4 lg:mt-0">
                    {socialData.map((item, index) =>
                        <a 
                            key={index}
                            href={item.href}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon 
                                icon={item.icon} 
                                className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" 
                                size="2x" 
                            />
                        </a>
                    )}
                </div>
                <div className="flex flex-col flex-1 justify-center items-center order-1 lg:order-2">
                    <h2 className="text-center text-gray-300">
                        <span className="text-yellow-600">Thiago</span> Silva Souza
                    </h2>
                    <p className="text-gray-300 text-center mt-8">
                        {t('welcome')}
                    </p>
                    <p className="text-gray-300 mt-8">
                        {t('Im')} <span className="text-yellow-600">
                            <Typewriter
                                words={words.map(word => t(word))}
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
                <div className="flex justify-center items-end gap-10 lg:flex-col flex-1 lg:pr-10 order-3 lg:order-3 mt-6 lg:mt-0">
                    {contactData.map((item, index) => 
                       <a 
                            key={index}
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Entre em contato pelo Telegram"
                        >
                            <FontAwesomeIcon 
                                icon={item.icon} 
                                className="text-gray-500 hover:text-gray-300 hover:scale-125 transition duration-300 cursor-pointer" 
                                size="3x" 
                            />
                        </a> 
                    )}
                </div>
            </section>
        </>
    )
}