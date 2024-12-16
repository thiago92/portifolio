import { useTranslation } from "react-i18next";
import imgIm from "../../../public/img-im-2.jpeg"
import DownlaodButtonCV from "@/components/button-download-cv/Index";

export default function About() {
    const { t } = useTranslation()

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
                            <DownlaodButtonCV />
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img src={imgIm} alt={t("develop")} className="w-96 rounded-lg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}