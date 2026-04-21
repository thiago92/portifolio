import { api } from "@/lib/api-client"
import type { ProjetoCarouselDto } from "@/interface/api.types"

export const projetosCarouselService = {
    getAll: () =>
        api.get<ProjetoCarouselDto[]>("/api/projetoscarousel").then((r) => r.data),

    getById: (id: string) =>
        api.get<ProjetoCarouselDto>(`/api/projetoscarousel/${id}`).then((r) => r.data),
}
