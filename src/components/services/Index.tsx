import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPalette, faComputer, faCode } from "@fortawesome/free-solid-svg-icons"

export default function Services() {

    const { t } = useTranslation()
    return(
        <>
            <section className="flex flex-col justify-center items-center mt-12 w-full">
                <h3>{t("services")}</h3>
                
                <div className="flex justify-around items-center w-full mt-8">
                    <div className="h-96 w-80 bg-stone-800 rounded-lg flex flex-col justify-center items-center gap-4 relative overflow-hidden group">
                        {/* Background que cresce */}
                        <div className="absolute inset-0 bg-yellow-700 scale-0 group-hover:scale-100 transition-transform duration-700 origin-center z-0"></div>

                        {/* Ícone */}
                        <div className="relative z-10 bg-yellow-700 rounded-3xl p-4">
                            <div className="p-4 rounded-3xl">
                            <FontAwesomeIcon icon={faPalette} size="4x" />
                            </div>
                        </div>

                        {/* Texto */}
                        <h4 className="relative z-10">{t("webdeseign")}</h4>
                        <span className="p-4 text-justify relative z-10">{t("text-services-1")}</span>
                    </div>

                    <div className="h-96 w-80 bg-stone-800 rounded-lg flex flex-col justify-center items-center gap-4">
                        <FontAwesomeIcon icon={faComputer} size="4x"/>
                        <h4>{t("site")}</h4>
                        <span className="p-4 text-justify">{t("text-services-2")}</span>
                    </div>
                    <div className="h-96 w-80 bg-stone-800 rounded-lg flex flex-col justify-center items-center gap-4">
                        <FontAwesomeIcon icon={faCode} size="4x"/>
                        <h4>{t("frontandback")}</h4>
                        <span className="p-4 text-justify">{t("text-services-3")}</span>
                    </div>
                </div>
                

            </section>
        </>
    ) 
}