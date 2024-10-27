import axios from 'axios'

export const instance = axios.create({
	baseURL:
		'https://idea-cipher-backend-1zjy5unxk-taras-projects-adb37d18.vercel.app',
	headers: {
		'Content-Type': 'application/json',
	},
})
