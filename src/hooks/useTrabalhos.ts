import { useEffect, useState } from "react"
import { trabalhosService } from "@/services/trabalhos.service"
import type { TrabalhoDto } from "@/interface/api.types"

export function useTrabalhos() {
    const [data, setData] = useState<TrabalhoDto[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        trabalhosService
            .getAll()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}
