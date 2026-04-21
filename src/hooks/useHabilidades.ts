import { useEffect, useState } from "react"
import { habilidadesService } from "@/services/habilidades.service"
import type { HabilidadeDto } from "@/interface/api.types"

export function useHabilidades() {
    const [data, setData] = useState<HabilidadeDto[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        habilidadesService
            .getAll()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}
