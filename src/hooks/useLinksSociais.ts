import { useEffect, useState } from "react"
import { linksSociaisService } from "@/services/links-sociais.service"
import type { LinkSocialDto } from "@/interface/api.types"

export function useLinksSociais() {
    const [data, setData] = useState<LinkSocialDto[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        linksSociaisService
            .getAll()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}
