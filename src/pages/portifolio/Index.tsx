import { useTranslation } from "react-i18next"
import img1 from "../../../public/design-mobile.png"
import img2 from "../../../public/portfolio-second.jpg"
import CustomButton from "@/components/custom-button/Index"

export default function Portifolio() {

    const { t } = useTranslation()

    const worksData = [
        {
            title: "designMobileEffect",
            text: "textoMobile",
            img: img1,
            textButton: "viewProject",
            href: "https://buzzvel-ebon.vercel.app",
            tooltip: "tooltipButtonPortifolio"
        },
        {
            title: "webDesign",
            text: "textDesign",
            img: img2,
            textButton: "viewProject",
            href: "https://thiago92.github.io/sitemadu/",
            tooltip: "tooltipButtonPortifolio"
        }
    ]
    
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
                    {worksData.map((item, index) => 
                        <div key={index} className="flex mb-16">
                            <div className="flex-1 flex items-center justify-end">
                                <img src={item.img} className="w-10/12" alt="design mobile" />
                            </div>
                            <div className="flex-1 flex items-end justify-center -ml-8 pb-8">
                                <div className="bg-stone-900 p-8 rounded-sm">
                                    <h4 className="text-yellow-600 mb-6">
                                        {t(item.title)}
                                    </h4>
                                    <p className="p-portifolio mb-6">
                                        {t(item.text)}
                                    </p>
                                    <CustomButton text={item.textButton} href={item.href} tooltip={item.tooltip} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}