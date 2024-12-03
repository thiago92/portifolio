import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import logo from "../../assets/logo/logo.png"

export default function Home() {
    return (
        <>
            <section className="flex justify-between bg-gray-100 p-4 h-screen">
                <div className="flex-1 bg-red-400 h-full mx-2">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <div></div>
                    
                </div>
                <div className="flex flex-col flex-1 bg-green-400 h-full mx-2 justify-center items-center">
                    <h2>
                        Thiago Silva Souza
                    </h2>
                    <p>
                        I'm a <span className="font-bold">Developer</span>
                    </p>
                </div>
                <div className="flex-1 bg-blue-400 h-full mx-2"></div>
            </section>
        </>
    )
}