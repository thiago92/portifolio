import { useTranslation } from "react-i18next";
import imgIm from "../../../public/img-im-2.jpeg"
import CustomButton from "@/components/custom-button/Index";
import Services from "@/components/services/Index";
import { Progress } from "@/components/ui/progress"

export default function About() {
    const { t } = useTranslation()

    const dataProgress = [
        {
            value: 75,
            label: "Uploading File"
        },
        {
            value: 75,
            label: "Uploading File"
        },
        {
            value: 75,
            label: "Uploading File"
        },
        {
            value: 75,
            label: "Uploading File"
        },
        {
            value: 75,
            label: "Uploading File"
        },
        {
            value: 75,
            label: "Uploading File"
        }
    ]

    return (
        <>
            <section className="text-gray-200 flex justify-center items-center">
                <div className="container">
                    <div className="w-full text-center text-gray-100">
                        <h2>
                            {t("about")} <span className="text-yellow-600">{t("me")}</span>
                        </h2>
                        <p>
                            {t("getKnow")}
                        </p>
                    </div>
                    <div className="flex mt-6">
                        <div className="flex-1">
                            <h3>
                                {t("IAmCreativeProactive")} <span className="text-yellow-600">{t("Parana")}, {t("Brazil")}</span>.
                            </h3>
                            <p className="mt-4 text-justify">{t("paragraph1")}</p>
                            <div className="flex justify-evenly mt-4">
                                <CustomButton text="Download CV PT-BR" type="download" href="/thiago-souza-CV.pdf" tooltip="download-tooltip-button-pt" />
                                <CustomButton text="Download CV EN" type="download" href="/thiago-souza-us-CV.pdf" tooltip="download-tooltip-button-en"/>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img src={imgIm} alt={t("develop")} className="w-96 rounded-lg"/>
                        </div>
                    </div>
                    <Services />
                    <div className="flex justify-center items-center p-4">
                        {dataProgress.map((item, index) => (
                            <div key={index} className="flex-1">
                                <Progress value={item.value} label={item.label} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}