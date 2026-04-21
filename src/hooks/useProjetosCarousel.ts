import { useEffect, useState } from "react"
import { projetosCarouselService } from "@/services/projetos-carousel.service"
import type { ProjetoCarouselDto } from "@/interface/api.types"

export function useProjetosCarousel() {
    const [data, setData] = useState<ProjetoCarouselDto[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        projetosCarouselService
            .getAll()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}
