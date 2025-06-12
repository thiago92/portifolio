import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fundo from "@/assets/img/commom/img-contact-1.jpg"
import { informationContact, informationSocial } from "@/data/information/information.data"
import { useTranslation } from "react-i18next"

export default function Information() {

    const { t } = useTranslation()

    return(
        <>
            <div
                style={{ backgroundImage: `url(${fundo})` }}
                className="
                    relative 
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    space-y-10 
                    bg-cover 
                    bg-center 
                    w-full 
                    pb-10 
                    rounded-md
                    pr-5
                    pl-5
                    lg:pr-0
                    lg:pl-0
                "
            >
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>
                {informationContact.map((item, index) =>
                    <div key={index} className="relative flex items-center justify-start text-white z-10 space-x-6">
                        <FontAwesomeIcon icon={item.icon} className="text-5xl text-yellow-600" />
                        <p className="contact">{t(item.information1)}: {item.information2}</p>
                    </div>
                )}
                <div className="relative flex items-center justify-around w-full">
                    {informationSocial.map((item, index) => 
                        <a 
                        key={index} 
                        className="hover:scale-125 transition-all mt-10 lg:mt-0"
                        href={item.href}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        >
                            <FontAwesomeIcon icon={item.icon} className="lg:text-5xl text-6xl text-yellow-600"/>
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}