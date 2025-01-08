import { Progress } from "@/components/ui/progress"
import { dataProgress } from "@/data/data-progress/data-progress.data"
import { useTranslation } from "react-i18next"

export default function CustomProgress() {

    const { t } = useTranslation()

    return(
        <>
            <section className="mt-12 w-full">
                <div className="text-center">
                    <h3>
                        {t("skill")}
                    </h3>
                </div>
                <div className="flex w-full lg:flex-row flex-col flex-wrap justify-center items-center">
                    {dataProgress.map((item, index) => (
                        <div key={index} className="flex-1 w-full lg:basis-1/2 p-4">
                        <Progress value={item.value} label={item.label} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}