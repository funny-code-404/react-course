import axios from "axios";

export const baseURL = 'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1';

const config = {
	headers: {
		'Content-Type': 'applications/json',
	}
}

export const createInstance = (customConfig = {}) => {
	const newConfig = {
		...config,
		...customConfig,
	};

	const instance = axios.create(newConfig);

	return instance
} 