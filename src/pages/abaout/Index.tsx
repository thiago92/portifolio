import { useTranslation } from "react-i18next";
import imgIm from "../../../public/img-im-2.jpeg"
import CustomButton from "@/components/custom-button/Index";
import Services from "@/components/services/Index";
import CustomProgress from "@/components/custom-progress/Index";

export default function About() {
    const { t } = useTranslation()

    return (
        <>
            <section className="text-gray-200 flex justify-center items-center mb-4">
                <div className="container">
                    <div className="w-full text-center text-gray-100">
                        <h2>
                            {t("about")} <span className="text-yellow-600">{t("me")}</span>
                        </h2>
                        <p>
                            {t("getKnow")}
                        </p>
                    </div>
                    <div className="lg:flex lg:flex-row flex flex-col lg:mt-6">
                        <div className="flex-1 order-2 lg:order-1 p-2 lg:p-0">
                            <h3>
                                {t("IAmCreativeProactive")} <span className="text-yellow-600">{t("Parana")}, {t("Brazil")}</span>.
                            </h3>
                            <p className="mt-4 text-justify">{t("paragraph1")}</p>
                            <div className="flex justify-evenly mt-4">
                                <CustomButton text="Download CV PT-BR" type="download" href="/thiago-souza-CV.pdf" tooltip="download-tooltip-button-pt" />
                                <CustomButton text="Download CV EN" type="download" href="/thiago-souza-us-CV.pdf" tooltip="download-tooltip-button-en"/>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
                            <img src={imgIm} alt={t("develop")} className="w-96 rounded-lg"/>
                        </div>
                    </div>
                    <Services />
                    <CustomProgress />
                </div>
            </section>
        </>
    )
}