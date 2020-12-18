import { makeAutoObservable, runInAction, autorun } from "mobx";

const FETCH_STATE_IDLE = 0;
const FETCH_STATE_FETCHING = 1;
const FETCH_STATE_ERROR = 2;
const ID_FOR_WEATHER = 'f746fe34b04088e9840201a09aa1d89b'

class Weather {

    cities = []
    description = ''
    humidity = 0
    speedWind = 0
    degWind = 0
    country = ''
    nameCity = ''
    temp = 0
    fetchState = FETCH_STATE_IDLE
    onLine = navigator.onLine
    coord = {
        lon: 0,
        lat: 0
    }
    inputText = ''

    constructor() {
        makeAutoObservable(this, { cities: false })

        autorun(() => {
            if (this.onLine && this.fetchState === FETCH_STATE_IDLE) {
                this.fetchCities()
            }
            if (this.nameCity !== undefined) {
                this.fetchSelectedCity()
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

    get searchCitiesListLimit() {
        let count = 0
        let array = []
        let length = this.cities.length
        for (let i = 0; i < length; i++) {
            if (this.cities[i].label.toLowerCase().startsWith(this.inputText.toLowerCase())) {
                count++
                array.push(this.cities[i])
            }
            if (count > 20) {
                break
            }
        }
        console.log(array,this.inputText);
        return array
    }

    fetchSelectedCity() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.nameCity}&appid=${ID_FOR_WEATHER}`).then(res => res.json()
        ).then(data => {
            runInAction(() => {
                this.setTempInCity(data.main.temp)
                this.setHumidity(data.main.humidity)
                this.setSpeedWind(data.wind.speed)
                this.setDegWind(data.wind.deg)
                this.setCountry(data.sys.country)
                this.setDescription(data.weather[0].description)
                this.setCoordLon(data.coord.lon)
                this.setCoordLat(data.coord.lat)
            })
        }
        )
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

    setCoordLon(newCoordLon) {
        return this.coord.lon = newCoordLon
    }
    setCoordLat(newCoordLat) {
        return this.coord.lat = newCoordLat
    }
    setTempInCity(newTemp) {
        return this.temp = newTemp
    }
    setHumidity(newValue) {
        return this.humidity = newValue
    }
    setSpeedWind(newValue) {
        return this.speedWind = newValue
    }
    setDegWind(newValue) {
        return this.degWind = newValue
    }
    setCountry(newCountry) {
        return this.country = newCountry
    }
    setDescription(newValue) {
        return this.description = newValue
    }
    setNameCity(newName) {
        return this.nameCity = newName
    }

}

export default new Weather()