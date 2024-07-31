import Rpg from '../assets/characters/rpg.png'
import Fps from '../assets/characters/fps.png'

export default function BottomSection() {
    return <>
            <section className="hero-section relative text-center h-[750px] mt-32 flex flex-col overflow-hidden">
            <div className='absolute m-auto left-0 right-0 top-0 bottom-0 z-10 bg-gradient-to-b from-transparent to-opacity-0'>
                <h1 className="text-center text-3xl font-extrabold leading-[1.15] text-white sm:text-5xl">
                    Contact Us
                </h1>
                <div className=''>
                    <img 
                        src={Rpg}
                        alt="RPG Character"
                        className='absolute -left-40 top-32 brightness-75 h-[750px] scale-x-[-1]'
                    />
                    <img 
                        src={Fps}
                        alt="Fantasy Creature"
                        className='absolute -right-20 brightness-75 h-full'
                    />
                </div>
            </div>
        </section>
    </>
}