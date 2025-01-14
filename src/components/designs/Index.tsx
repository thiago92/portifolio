import { useTranslation } from "react-i18next"
import CustomButton from "@/components/custom-button/Index"
import { WorksData } from "@/data/data-designs/data-designs.data"

export default function Designs() {

    const { t } = useTranslation()

    return (
        <>
            {WorksData.map((item, index) => 
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
        </>
    )
}