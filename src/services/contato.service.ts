import { api } from "@/lib/api-client"
import type { ContatoDto } from "@/interface/api.types"

export const contatoService = {
    get: () =>
        api.get<ContatoDto>("/api/contato").then((r) => r.data),
}
