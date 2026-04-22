export interface HabilidadeDto {
    id: string
    label: string
    valor: number
    ordem: number
}

export interface ProjetoCarouselDto {
    id: string
    url: string
    imgPath: string
    altSlug: string
    ordem: number
}

export interface TrabalhoDto {
    id: string
    tituloSlug: string
    textoSlug: string
    imgPath: string
    textoBotaoSlug: string
    href: string
    tooltipSlug: string
    ordem: number
}

export enum ETipoLinkSocial {
    Social = 1,
    ContatoRapido = 2,
}

export interface LinkSocialDto {
    id: string
    iconeSlug: string
    url: string
    tipo: ETipoLinkSocial
    ordem: number
}

export interface ContatoDto {
    id: string
    nome: string
    localizacao: string
    telefone: string
    email: string
}

export interface ChatMessageDto {
    role: "user" | "assistant"
    content: string
}

export interface ChatRequestDto {
    message: string
    language?: string
    history?: ChatMessageDto[]
}

export interface ChatResponseDto {
    answer: string
}
