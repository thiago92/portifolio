import Information from "@/components/information/Index"
import { useTranslation } from "react-i18next"


export default function Contact() {

    const { t } = useTranslation()
    
    return (
        <>
            <section className="text-gray-200 flex justify-center items-center mb-4">
                <div className="container">
                    <div className="w-full text-center text-gray-100 mb-8">
                        <h2>
                            {t("contact-contact")} <span className="text-yellow-600">{t("contact-me")}</span>
                        </h2>
                        <p className="capitalize">
                            <span className="text-yellow-600">{t("get")}</span> {t("inTouch")}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:pr-52 lg:pl-52">
                        <h4>
                            {t("messageMe")}
                        </h4>
                        <Information />
                    </div>
                </div>
            </section>
        </>
    )
}