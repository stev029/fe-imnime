const baseUrl = import.meta.env.VITE_API_CLIENT_BASE_URL

export async function GetTopAnime() {
    const response = await fetch(`${baseUrl}/top/anime?limit=10`)
    const anime = await response.json()
    return anime
}

export async function GetAnimeById(id) {
    const response = await fetch(`${baseUrl}/anime/${id}`)
    const anime = await response.json()
    return anime
}

export async function GetRecommendAnime() {
    const response = await fetch(`${baseUrl}/recommendations/anime?limit=10`)
    const anime = await response.json()
    return anime
}