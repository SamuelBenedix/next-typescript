import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import {
  FeatureGame,
  MainBanner,
  Navbar,
  Reached,
  Story,
  TransactionStep,
} from '../components';
import Footer from '../components/organizm/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
