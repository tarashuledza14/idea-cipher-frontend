import ArrowIcon from '@/components/ui/icons/arrow-icon'
import { motion } from 'framer-motion'

interface Props {
	isRotate: boolean
}
const Arrow = ({ isRotate }: Props) => {
	return (
		<motion.div
			className='text-xl flex justify-center items-center w-full'
			initial={{ rotateZ: 0 }}
			animate={{ rotateZ: !isRotate ? -180 : 0 }}
			transition={{ rotateZ: 0 }}
		>
			<ArrowIcon width={100} height={100} />
		</motion.div>
	)
}

export default Arrow
