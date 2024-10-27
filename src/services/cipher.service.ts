import { instance } from '@/api/api'

interface IEncryptedResponse {
	encrypted: string
}
interface IDecryptedResponse {
	decrypted: string
	decrypted_text: string
}

export const CipherService = {
	encrypt: async (plain: string, key: string) => {
		const response = await instance.post<null, { data: IEncryptedResponse }>(
			'/encrypt',
			{
				plain,
				key,
			}
		)
		return response.data
	},

	decrypt: async (ciphertext: string, key: string) => {
		const response = await instance.post<null, { data: IDecryptedResponse }>(
			'/decrypt',
			{
				ciphertext,
				key,
			}
		)
		return response.data
	},
}
