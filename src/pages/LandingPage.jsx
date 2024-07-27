import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'

export default function LandingPage() {
    return (
        <>
            <div className='bg-black'>
                <div className='w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none'>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0 z-20'></div>
                </div>
                <div className='relative z-20'>
                    <NavBar />
                    <div className="container mx-auto">
                        <HeroSection />
                        <FeatureSection />
                        <FeatureSection />
                        <FeatureSection />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}