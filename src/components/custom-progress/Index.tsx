import { Progress } from "@/components/ui/progress"
import { useTranslation } from "react-i18next"
import { useHabilidades } from "@/hooks/useHabilidades"

export default function CustomProgress() {

    const { t } = useTranslation()
    const { data, loading, error } = useHabilidades()

    return(
        <>
            <section className="mt-12 w-full">
                <div className="text-center">
                    <h3>
                        {t("skill")}
                    </h3>
                </div>
                {loading && <p className="text-center mt-4 text-gray-400">...</p>}
                {error && <p className="text-center mt-4 text-red-500">{t("loadError")}</p>}
                {!loading && !error && (
                    <div className="flex w-full lg:flex-row flex-col flex-wrap justify-center items-center">
                        {data.map((item) => (
                            <div key={item.id} className="flex-1 w-full lg:basis-1/2 p-4">
                                <Progress value={item.valor} label={item.label} />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    )
}