import React, { FC } from 'react'

import { Footer, Header } from '.'

interface LayoutProps {
  children: React.ReactNode
  locale: string
}
export const Layout: FC<LayoutProps> = ({ children, locale }) => {
  return (
    <div dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <div className='wrapper'>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
