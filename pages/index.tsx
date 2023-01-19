import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import AOS from 'aos';
import NavBar from '../components/organisms/Navbars';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep.tsx';
import FeatureGame from '../components/organisms/MainBanner/FeatureGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/TransactionStep.tsx/Story';
import Footer from '../components/organisms/Footer';


export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <NavBar />
            <MainBanner />
            <TransactionStep />
            <FeatureGame />
            <Reached />
            <Story />
            <Footer />
        </>
    )
}
