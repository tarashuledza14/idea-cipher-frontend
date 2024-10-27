import logoImg from '../../../public/logo.png'
import Image from 'next/image'
const Logo = () => {
	return (
		<div className='flex items-center '>
			<Image src={logoImg} alt={'logo'} height={100} width={100} />
			<p className='text-6xl font-bold italic'>IDEA cipher</p>
		</div>
	)
}

export default Logo
