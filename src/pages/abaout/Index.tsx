import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation()

    return (
        <>
            <section>
                <div className="w-full text-center text-gray-100">
                    <h2>
                        {t("about")} <span className="text-yellow-600">{t("me")}</span>
                    </h2>
                    <p>
                        {t("getKnow")}
                    </p>
                </div>
                
            </section>
        </>
    )
}