import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from "react-i18next"
import { CarouselData } from "@/data/data-carousel/data-carousel.data"

export default function CustomCarousel() {

    const { t } = useTranslation()
    
    return(
        <>
            <div className="container mb-8">
                <div className="mb-4 text-center">
                    <h3>
                        <span className="text-yellow-600">{t("freelance")}</span> {t("workIvedone")}
                    </h3> 
                </div>
                <div className="bg-white flex justify-center items-center">
                    <Carousel
                        plugins={[
                            Autoplay({
                              delay: 2000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {CarouselData.map((item, index) => 
                                <CarouselItem key={index} className="lg:basis-1/3">
                                    <a href={item.url} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                                        <div className="hover:scale-105 transition-all flex justify-center items-center">
                                            <img className="rounded-sm lg:w-96 w-80" src={item.img} alt={t(item.alt)} />
                                        </div>
                                    </a>
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    )
}