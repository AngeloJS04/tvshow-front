
import React from 'react'
import Header from './header'
import { Container } from '@nextui-org/react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container>
            <Header />
            <div>{children}</div>
        </Container>
    )
}

export default Layout