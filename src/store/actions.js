import { getWeather } from '../api/weather-api'

export default {
	async ACT_DAILY({ commit }, value) {
		commit('MUT_LOADING', true);
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getWeather(value, 'daily'))
		//로딩시작
		commit('MUT_LOADING', false);
	},
	async ACT_DAYS({ commit }, value) {
		commit('MUT_LOADING', true);
		//로딩나타남
		commit('MUT_DAYS', await getWeather(value, 'days'))
		commit('MUT_LOADING', false);
		//로딩사라짐
	},
}