'use client'
import { Toaster } from '@/components/ui/sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<Toaster position='bottom-left' richColors />
		</QueryClientProvider>
	)
}

export default Providers
