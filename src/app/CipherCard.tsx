import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Check, CopyIcon } from 'lucide-react'
import { useCallback } from 'react'

interface Props {
	handleChangeType: () => void
	text: string
	handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	disabled?: boolean
	header: string
	copied: 'Plaintext' | 'Ciphertext' | null
	handleChangeCopyStatus: (type: string) => void
}

const CipherCard = ({
	handleChangeCopyStatus,
	text,
	handleTextChange,
	disabled,
	header,
	copied,
}: Props) => {
	const handleCopyText = useCallback(async () => {
		await navigator.clipboard.writeText(text)
		handleChangeCopyStatus(header)
	}, [text, header])

	return (
		<Card className='col-span-2'>
			<CardHeader>
				<CardTitle>{header}</CardTitle>
			</CardHeader>
			<CardContent>
				<Textarea
					value={text}
					onChange={handleTextChange}
					disabled={disabled}
				/>
			</CardContent>
			<CardFooter>
				<Button
					onClick={handleCopyText}
					className='flex justify-center items-center'
				>
					{copied === header ? <Check /> : <CopyIcon />} Copy
				</Button>
			</CardFooter>
		</Card>
	)
}

export default CipherCard
