import { useTranslation } from "react-i18next"
import CustomButton from "@/components/custom-button/Index"
import { WorksData } from "@/data/data-designs/data-designs.data"

export default function Designs() {

    const { t } = useTranslation()

    return (
        <>
            {WorksData.map((item, index) => 
                <div key={index} className="flex lg:flex-row flex-col lg:mb-16 pl-4 pr-4 lg:pl-0 lg:pr-0">
                    <div className="flex-1 flex items-center lg:justify-end justify-center mb-4 lg:mb-0">
                        <img src={item.img} className="lg:w-10/12 w-full" alt="design mobile" />
                    </div>
                    <div className="flex-1 flex items-end justify-center lg:-ml-8 ml-0 pb-8">
                        <div className="bg-stone-900 p-8 rounded-sm">
                            <h4 className="text-yellow-600 mb-6">
                                {t(item.title)}
                            </h4>
                            <p className="p-portfolio mb-6">
                                {t(item.text)}
                            </p>
                            <CustomButton text={item.textButton} href={item.href} tooltip={item.tooltip} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}