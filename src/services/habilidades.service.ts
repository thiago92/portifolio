import { api } from "@/lib/api-client"
import type { HabilidadeDto } from "@/interface/api.types"

export const habilidadesService = {
    getAll: () =>
        api.get<HabilidadeDto[]>("/api/habilidades").then((r) => r.data),

    getById: (id: string) =>
        api.get<HabilidadeDto>(`/api/habilidades/${id}`).then((r) => r.data),
}
