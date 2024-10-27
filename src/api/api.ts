import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://idea-cipher-backend.vercel.app',
	headers: {
		'Content-Type': 'application/json',
	},
})
