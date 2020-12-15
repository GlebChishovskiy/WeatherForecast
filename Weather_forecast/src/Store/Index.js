import { makeAutoObservable, runInAction, autorun } from "mobx";

const FETCH_STATE_IDLE = 0;
const FETCH_STATE_FETCHING = 1;
const FETCH_STATE_ERROR = 2;

class Weather {

    cities = []
    searchСities = []
    nameCity = "London"
    temp = 0
    fetchState = FETCH_STATE_IDLE
    onLine = navigator.onLine
    coord = {
        lon: 0,
        lat: 0
    }
    inputText = ''

    constructor() {
        makeAutoObservable(this)

        autorun(() => {
            if (this.onLine && this.fetchState === FETCH_STATE_IDLE) {
                this.fetchCities()
            }
        }, { delay: 500 })

        window.addEventListener("online", () => {
            runInAction(() => {
                this.onLine = true
            })
        });

        window.addEventListener("offline", () => {
            runInAction(() => {
                this.onLine = false
            })
        });
    }

    get searchCitiesList() {
        return this.cities.filter(p => p.name.toLowerCase().startsWith(this.inputText.toLowerCase())).slice(0, 10)
        // let count = 0
        // let array = []
        // let length = this.cities.length
        // for (let i = 0; i < length && count < 10; i++) {
        //     if ( this.cities[i].name.toLowerCase().startsWith(this.inputText.toLowerCase())) {
        //         count++
        //         array[count++] = this.cities[i]
        //     }
        // }

        // return array
    }

    fetchCities() {

        this.fetchState = FETCH_STATE_FETCHING
        fetch("http://localhost:3001/city")
            .then(res => res.json())
            .then(citiesList => {
                runInAction(() => {
                    this.cities = citiesList
                    this.fetchState = FETCH_STATE_IDLE
                });
            })
            .finally(() => {
                runInAction(() => {
                    this.fetchState = FETCH_STATE_ERROR
                })
            })

    }

    setSearchFilms(text) {
        return this.searchСities = text
    }

    changeInputText(text) {
        this.inputText = text
    }

    setCoord(newCoordLon, newCoordLat) {
        return this.coord = {
            lon: newCoordLon,
            lat: newCoordLat
        }
    }

    setTempInCity(newTemp) {
        return this.temp = Math.round((newTemp - 273.15) * 10) / 10
    }

    setNameCity(newName) {
        return this.nameCity = newName//???
    }

}

export default new Weather