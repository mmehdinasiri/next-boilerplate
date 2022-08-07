import React, { FC } from 'react'

import { Footer, Header } from '.'

interface LayoutProps {
  children: React.ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
