'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CipherService } from '@/services/cipher.service'
import { useMutation } from '@tanstack/react-query'
import { PlayIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import Arrow from './Arrow'
import CipherCard from './CipherCard'
import { toast } from 'sonner'

export default function Home() {
	const [isEncrypt, setIsEncrypt] = useState(true)

	const [key, setKey] = useState<string>('6E3272357538782F413F4428472B4B62')
	const [encryptedText, setEncryptedText] = useState<string>('')
	const [plainText, setPlainText] = useState<string>('')
	const [copied, setCopied] = useState<'Plaintext' | 'Ciphertext' | null>(null)
	const {
		mutate: encrypt,
		data: encryptedResponse,
		isError: isErrorEncrypted,
	} = useMutation({
		mutationKey: ['encrypt', key, plainText],
		mutationFn: () => CipherService.encrypt(plainText, key),
	})

	const {
		mutate: decrypt,
		data: decryptedResponse,
		isError: isErrorDecrypted,
		error,
	} = useMutation({
		mutationKey: ['decrypt', key, encryptedText],
		mutationFn: () => CipherService.decrypt(encryptedText, key),
	})

	useEffect(() => {
		if (encryptedResponse) setEncryptedText(encryptedResponse.encrypted)
	}, [encryptedResponse])

	useEffect(() => {
		if (decryptedResponse) setPlainText(decryptedResponse.decrypted_text)
	}, [decryptedResponse])

	useEffect(() => {
		if (isErrorDecrypted || isErrorEncrypted) toast.error(error?.message || '')
	}, [isErrorDecrypted, isErrorEncrypted])

	const handleChangeType = useCallback(() => {
		setIsEncrypt(!isEncrypt)
	}, [isEncrypt])

	const handlePlainTextChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setPlainText(e.target.value)
			if (!isEncrypt) setIsEncrypt(true)
		},
		[isEncrypt]
	)

	const handleEncryptedTextChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setEncryptedText(e.target.value)
			if (isEncrypt) setIsEncrypt(false)
		},
		[isEncrypt]
	)

	const handleRun = useCallback(() => {
		if (isEncrypt) {
			encrypt()
		} else {
			decrypt()
		}
	}, [isEncrypt])

	const handleChangeCopyStatus = useCallback((type: string) => {
		setCopied(type as typeof copied)
	}, [])
	return (
		<div className='grid grid-cols-5 py-32'>
			<CipherCard
				header='Plaintext'
				copied={copied}
				handleChangeCopyStatus={handleChangeCopyStatus}
				handleChangeType={handleChangeType}
				text={plainText}
				handleTextChange={handlePlainTextChange}
			/>
			<div className='flex-col justify-center items-center p-10'>
				<Arrow isRotate={isEncrypt} />
				<div className='flex justify-center items-center gap-2'>
					<p>Key:</p>
					<Input value={key} onChange={e => setKey(e.target.value)} />
				</div>
			</div>
			<CipherCard
				copied={copied}
				header='Ciphertext'
				handleChangeCopyStatus={handleChangeCopyStatus}
				text={encryptedText}
				handleChangeType={handleChangeType}
				handleTextChange={handleEncryptedTextChange}
			/>

			<Button className='mt-12' onClick={handleRun}>
				<PlayIcon />
				Run
			</Button>

			<div className='fixed bottom-5 left-1/2 -translate-x-1/2'>
				developed by: <span className='font-bold'>© tarashuledza</span>
			</div>
		</div>
	)
}
