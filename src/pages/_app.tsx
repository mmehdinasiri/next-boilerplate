import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import '@/assets/styles/main.scss'
import '@/assets/styles/app.scss'
import { queryClient } from '@/config/api/reactQueryConfig'

function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default App
