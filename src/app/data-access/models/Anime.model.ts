export interface AnimeSource{
    id: number
    server: string
    identifier: string
    slug: string
    episode: number
    embed: string
    type: string
    upload: string
    views: number
    state: number
}

export interface Anime{
    id: number
    name: string
    slug: string
    description: string
    image: string
    banner: string
    keywords: any
    type: string
    status: string
    episode: string
    premiered: string
    views: number
    genre: string
    creation: string
}