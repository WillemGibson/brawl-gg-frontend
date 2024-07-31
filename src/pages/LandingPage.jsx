import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { partnersLogo } from '../data/partners'
import Slider from '../components/Slider'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import BottomSection from '../components/BottomSection'

export default function LandingPage() {
    return <>
            <div className='bg-black'>
                <div className='w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none'>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0 z-20'></div>
                </div>
                <div className='relative z-20'>
                    <NavBar />
                    <div className="container mx-auto">
                        <HeroSection />
                        <Slider images={partnersLogo} />
                        <FeaturesSection />
                        <BottomSection />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
}