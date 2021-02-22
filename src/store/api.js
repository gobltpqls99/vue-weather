import axios from "axios"

const APP_ID ='';
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const params = { units: 'metric', lang: 'kr', appid:APP_ID }

// 현재 위치의 navigator.getPosition() 
const getPosition = async () => {

}

const getDaily = async () => {
  params.id = id
  const r = await axios.get(DAILY_URL, { params })
  return r.data
}

const getDays = async () => {
  
}

const getWorld = async () => {
  
}

export { getPosition, getDaily, getDays, getWorld }