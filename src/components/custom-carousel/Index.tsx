import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel" 

export default function CustomCarousel() {
    return(
        <>
            <div className="container">
                <h2>Carousel</h2>
                <div className="bg-white">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>...</CarouselItem>
                            <CarouselItem>...</CarouselItem>
                            <CarouselItem>...</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    )
}