import Hero from '@/components/Hero';
import Puppies from '@/components/Puppies';
import WaysToMeet from '@/components/WaysToMeet';
import Journey from '@/components/Journey';
import WhyUs from '@/components/WhyUs';
import Stories from '@/components/Stories';
import Faq from '@/components/Faq';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';

/* Single-page landing: every section is an anchor target for the nav. */
export default function Home() {
  return (
    <>
      <Hero />
      <Puppies />
      <WaysToMeet />
      <Journey />
      <WhyUs />
      <Stories />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}
