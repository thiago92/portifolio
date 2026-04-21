import { useTranslation } from "react-i18next"
import CustomButton from "@/components/custom-button/Index"
import { useTrabalhos } from "@/hooks/useTrabalhos"

export default function Designs() {

    const { t } = useTranslation()
    const { data, loading, error } = useTrabalhos()

    if (loading) return <p className="text-center mt-4 text-gray-400">...</p>
    if (error) return <p className="text-center mt-4 text-red-500">{t("loadError")}</p>

    return (
        <>
            {data.map((item) =>
                <div key={item.id} className="flex lg:flex-row flex-col lg:mb-16 pl-4 pr-4 lg:pl-0 lg:pr-0">
                    <div className="flex-1 flex items-center lg:justify-end justify-center mb-4 lg:mb-0">
                        <img src={item.imgPath} className="lg:w-10/12 w-full" alt={t(item.tituloSlug)} />
                    </div>
                    <div className="flex-1 flex items-end justify-center lg:-ml-8 ml-0 pb-8">
                        <div className="bg-stone-900 p-8 rounded-sm">
                            <h4 className="text-yellow-600 mb-6">
                                {t(item.tituloSlug)}
                            </h4>
                            <p className="p-portfolio mb-6">
                                {t(item.textoSlug)}
                            </p>
                            <CustomButton text={item.textoBotaoSlug} href={item.href} tooltip={item.tooltipSlug} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}