import { makeAutoObservable, computed, comparer, runInAction, autorun } from 'mobx'
import { MIN, MAX, convertCelsiusToFahrengeit, convertKelvinToFahrenheit, convertKelvinToCelsius } from '../Utils'
import { images } from '../App'
//Warning
const FETCH_STATE_IDLE = 0
const FETCH_STATE_FETCHING = 1
const FETCH_STATE_ERROR = 2
const ID_FOR_WEATHER = 'f746fe34b04088e9840201a09aa1d89b'
const LIMITION_FOR_CITY_SEARCH_BY_TEMPERATURE_CELSIUS = 5
const LIMITION_FOR_CITY_SEARCH_BY_TEMPERATURE_FAHRENGEIT = 9

class Weather {

    isCelsius = true
    cities = []
    description = ''
    humidity = ''
    speedWind = ''
    degWind = ''
    country = ''
    nameCity = ''
    temp = 273
    fetchState = FETCH_STATE_IDLE
    fetchCity = FETCH_STATE_IDLE
    onLine = navigator.onLine
    coord = {
        lon: 0,
        lat: 0
    }
    inputText = ''
    value = 0
    prevCity = ''
    allCities = [
        { temp: 1, name: 'a' },
        { temp: 2, name: 'b' },
        { temp: 3, name: 'c' },
        { temp: 4, name: 'd' },
        { temp: 5, name: 'r' },
        { temp: 2, name: 'aasd' },
        { temp: 2, name: 'q2' },
        { temp: 5, name: 'aasd' },
        { temp: 10, name: 'dffg' },
        { temp: 12, name: '456' },
        { temp: 20, name: '345' },
        { temp: 25, name: '43' },
        { temp: -2, name: '232' }
    ]

    constructor() {
        makeAutoObservable(this, { searchCitiesList: computed({ equals: comparer.shallow }) })

        autorun(() => {
            if (this.onLine && this.fetchState === FETCH_STATE_IDLE) {
                this.fetchCities()
            }
        }, { delay: 500 })

        autorun(() => {
            if (this.onLine && this.nameCity !== undefined && this.fetchCity === FETCH_STATE_IDLE) {
                if (this.prevCity !== this.nameCity) {
                    this.prevCity = this.nameCity
                    this.fetchSelectedCity()
                }
            }
        }, { delay: 500 })


        window.addEventListener("online", () => {
            runInAction(() => {
                this.onLine = true
            })
        })

        window.addEventListener("offline", () => {
            runInAction(() => {
                this.onLine = false
            })
        })
    }

    get searchCitiesList() {
        let count = 0
        let array = []
        const inputTextLowerCase = this.inputText.toLowerCase()
        for (let value of this.cities) {
            if (value.name.toLowerCase().startsWith(inputTextLowerCase)) {
                count++
                array.push(value)
                if (count === 10) {
                    break
                }
            }
        }
        return array
    }

    get backgroundPage() {
        const denominator = 100 / (images.length - 1)
        return this.isCelsius ? Math.round(((this.value - MIN) * 100 / (MAX - MIN)) / denominator) :
            Math.round((this.value - convertCelsiusToFahrengeit(MIN)) * 100 / (convertCelsiusToFahrengeit(MAX) - convertCelsiusToFahrengeit(MIN)) / denominator)//исправить
    }

    get citiesCertainTemperature() {
        let array = []
        let count = 0
        const valueTemp = +this.value.toFixed(1)
        let a
        for (let key of this.allCities) {
            if (this.isCelsius) {
                if (Math.abs(valueTemp - key.temp.toFixed(1)) <= LIMITION_FOR_CITY_SEARCH_BY_TEMPERATURE_CELSIUS) {//сделать
                    count++
                    array.push(key)
                }
            } else {
                if (Math.abs(valueTemp - key.temp.toFixed(1)) <= LIMITION_FOR_CITY_SEARCH_BY_TEMPERATURE_FAHRENGEIT) {//сделать
                    count++
                    array.push(key)
                }
            }
            if (count === 10) {
                break;
            }
        }
        return array

    }

    fetchSelectedCity() {
        this.fetchCity = FETCH_STATE_FETCHING
        if (this.nameCity) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.nameCity}&appid=${ID_FOR_WEATHER}`).then(res => res.json()
            ).then(data => {
                runInAction(() => {
                    this.setWeaterInformation(data.coord.lon, data.coord.lat,
                        data.main.temp, data.main.humidity, data.wind.speed,
                        data.wind.deg, data.sys.country, data.weather[0].description,
                    )
                    this.fetchCity = FETCH_STATE_IDLE
                })
            }
            ).finally(() => {
                runInAction(() => {
                    this.fetchCity = FETCH_STATE_IDLE
                })
            })
        }
    }

    a = []

    fetchCities() {
        this.fetchState = FETCH_STATE_FETCHING
        fetch("http://localhost:3001/city")
            .then(res => res.json())
            .then(citiesList => {
                runInAction(() => {
                    this.cities = citiesList
                    this.fetchState = FETCH_STATE_IDLE
                })
            })
            .finally(() => {
                runInAction(() => {
                    this.fetchState = FETCH_STATE_ERROR
                })
            })

    }

    changeInputText(text) {
        this.inputText = text
    }

    setIsCelsius(value) {
        this.isCelsius = value
    }

    setWeaterInformation(newLon, newLat,
        newTemp, newHumidity,
        newSpeedWind, newDegWind,
        newCountry, newDescription) {
        this.coord.lon = newLon
        this.coord.lat = newLat
        this.temp = newTemp
        this.humidity = newHumidity
        this.speedWind = newSpeedWind
        this.degWind = newDegWind
        this.country = newCountry
        this.description = newDescription
    }

    setNameCity(newName) {
        this.nameCity = newName
    }

    setValue(value) {
        this.value = value
    }

}

export default new Weather()