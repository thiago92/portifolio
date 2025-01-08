import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "@/data/service-data/service.data";

export default function Services() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-col justify-center items-center mt-12 w-full">
            <h3>{t("services")}</h3>
            <div className="flex lg:flex-row flex-col justify-around items-center w-full mt-8">
                {services.map((service, index) => (
                    <div key={index} className="h-96 w-80 mb-4 lg:mb-0 bg-stone-800 rounded-lg flex flex-col justify-center items-center gap-4 relative overflow-hidden group">
                        {/* Background que cresce */}
                        <div className="absolute inset-0 rounded-lg bg-yellow-700 scale-0 group-hover:scale-100 transition-transform duration-1000 z-0 origin-[center_10%] group-hover:origin-[center_10%]"></div>

                        {/* Ícone */}
                        <div className="relative z-10 bg-yellow-700 rounded-3xl p-4">
                            <div className="p-4 rounded-3xl">
                                <FontAwesomeIcon icon={service.icon} size="4x" />
                            </div>
                        </div>

                        {/* Texto */}
                        <h4 className="relative z-10">{t(service.title)}</h4>
                        <span className="p-4 text-justify relative z-10 tracking-[-0.004em]">{t(service.text)}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
