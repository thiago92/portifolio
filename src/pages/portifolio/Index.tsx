import { useTranslation } from "react-i18next"
import Designs from "@/components/designs/Index"
import CustomCarousel from "@/components/custom-carousel/Index"

export default function Portifolio() {

    const { t } = useTranslation()
    
    return (
        <>
            <section className="text-gray-200 flex justify-center items-center mb-4">
                <div className="container">
                    <div className="w-full text-center text-gray-100 mb-8">
                        <h2>
                            {t("portifolio")}
                        </h2>
                        <p className="capitalize">
                            {t("myWorks")} <span className="text-yellow-600">{t("works")}</span>
                        </p>
                    </div>
                    <Designs />
                    <CustomCarousel />
                </div>
            </section>
        </>
    )
}