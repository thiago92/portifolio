import { useEffect, useState } from "react"
import { contatoService } from "@/services/contato.service"
import type { ContatoDto } from "@/interface/api.types"

export function useContato() {
    const [data, setData] = useState<ContatoDto | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        contatoService
            .get()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}
