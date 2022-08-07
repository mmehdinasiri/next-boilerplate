import React, { FC } from 'react'

import { Footer, Header } from '.'

interface LayoutProps {
  children: React.ReactNode
  locale: string
}
export const Layout: FC<LayoutProps> = ({ children, locale }) => {
  return (
    <div dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
