import Header from 'components/Header';
import { Container } from 'react-bootstrap'
import StickyMenu from 'components/StickyMenu'
import BottomFade from './BottomFade';
import Head from 'next/head'

export default function PageLayout({children, className}) {
    return (
        <>
        <Container>
            <Head>
                <title>Alex Sumoski | Developer</title>
                <link rel="icon" type="image/png" href="/public/vercel.svg" />
            </Head>
            <Header/>
            <div className={`page-wrapper ${className}`}>
                {children}
            </div>
        </Container>
        <footer className="page-footer" />
        </>
    )
}