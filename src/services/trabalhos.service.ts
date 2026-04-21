import { api } from "@/lib/api-client"
import type { TrabalhoDto } from "@/interface/api.types"

export const trabalhosService = {
    getAll: () =>
        api.get<TrabalhoDto[]>("/api/trabalhos").then((r) => r.data),

    getById: (id: string) =>
        api.get<TrabalhoDto>(`/api/trabalhos/${id}`).then((r) => r.data),
}
