import axios from "axios"

export const fetchEpisodes = async () => {
    const url = 'https://api.wokpa.app/api/listeners/top-podcasts?page=1&per_page=40'
    // const url = 'https://api.wokpa.app/api/listeners/top-categories_page=3'

    try {
        const response = await axios.get(url)
        if (response.status !== 200) {
            throw new Error('Failed to fetch episodes');
        }
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch episodes');
    }

}
export const fetchTrending = async () => {
    const url = 'https://api.wokpa.app/api/listeners/popular-and-trending-podcasts?page=1&per_page=6'
    // const url = 'https://api.wokpa.app/api/listeners/top-categories_page=3'

    try {
        const response = await axios.get(url)
        if (response.status !== 200) {
            throw new Error('Failed to fetch episodes');
        }
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch episodes');
    }

}
export const fetchNewEpisode = async () => {
    const url = 'https://api.wokpa.app/api/listeners/episodes/latest?page=1&per_page=6'
    // const url = 'https://api.wokpa.app/api/listeners/top-categories_page=3'

    try {
        const response = await axios.get(url)
        if (response.status !== 200) {
            throw new Error('Failed to fetch episodes');
        }
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch episodes');
    }

}