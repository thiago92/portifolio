import { api } from "@/lib/api-client"
import type { LinkSocialDto } from "@/interface/api.types"

export const linksSociaisService = {
    getAll: () =>
        api.get<LinkSocialDto[]>("/api/linkssociais").then((r) => r.data),

    getById: (id: string) =>
        api.get<LinkSocialDto>(`/api/linkssociais/${id}`).then((r) => r.data),
}
