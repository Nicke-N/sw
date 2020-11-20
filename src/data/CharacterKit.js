const ROOT_URL = 'https://swapi.dev/api/'
const API_URL = `${ROOT_URL}people/`
const LANDING_URL = `${API_URL}?page1`

export default class {
    fetchList() {
        return fetch(LANDING_URL)
    }

    fetchListByURL(url) {
        return fetch(url)
    }

    fetchDetails(id) {
        return fetch(API_URL+id)
    }

    fetchSearch(term) {
        return fetch(API_URL+term)
    }
}