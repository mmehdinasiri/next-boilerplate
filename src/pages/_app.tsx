import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import { queryClient } from '@/config/api/reactQueryConfig'
import { NextRouter, useRouter } from 'next/router'
import * as locales from '@/public/local'

import '@/assets/styles/main.scss'
import '@/assets/styles/app.scss'

const defaultMarket = process.env.DEFAULT_MARKET || 'en'

function App({ Component, pageProps }: AppProps) {
    const router: NextRouter = useRouter()
    const { locale = defaultMarket, defaultLocale } = router
    const messages = locales[locale as keyof typeof locales]

    return (
        <IntlProvider
            locale={locale}
            defaultLocale={defaultLocale}
            messages={messages}
        >
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </IntlProvider>
    )
}

export default App
