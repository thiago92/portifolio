import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import imgCarousel1 from "../../../public/carousel-img-1.png"
import imgCarousel2 from "../../../public/carousel-img-2.png"
import imgCarousel3 from "../../../public/carousel-img-3.png"
import imgCarousel4 from "../../../public/carousel-img-4.png"
import imgCarousel5 from "../../../public/carousel-img-5.png"

export default function CustomCarousel() {
    const carouselData = [
        {
            url: "https://luanalima.adv.br/direitodasaude/",
            img: imgCarousel1,
            alt: "Site de Luana Lima direito da saude"
        },
        {
            url: "https://luanalima.adv.br",
            img: imgCarousel2,
            alt: "Site de Luana Lima Advogacia"
        },
        {
            url: "https://movimentconsultoria.com",
            img: imgCarousel3,
            alt: "Site de consultoria de empresa alimentícia"
        },
        {
            url: "https://isabandeira.com.br",
            img: imgCarousel4,
            alt: "Site de propaganda eleitoral"
        },
        {
            url: "https://heniben.vercel.app",
            img: imgCarousel5,
            alt: "Site de venda de energia elétrica"
        }
    ]
    
    return(
        <>
            <div className="container mb-8">
                <div className="mb-4 text-center">
                    <h3>
                        Freelances que já realizei
                    </h3> 
                </div>
                <div className="bg-white">
                    <Carousel
                        plugins={[
                            Autoplay({
                              delay: 2000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {carouselData.map((item, index) => 
                                <CarouselItem key={index} className="basis-1/3">
                                    <a href={item.url} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                                        <div className="hover:scale-105 transition-all">
                                            <img className="rounded-sm" src={item.img} alt={item.alt} />
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