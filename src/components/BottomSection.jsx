import { Link } from 'react-router-dom'

export default function BottomSection() {
    return <>
        <section className="bottom-section relative text-center h-[750px] mt-32 flex flex-col overflow-hidden">
            <div className='absolute m-auto left-0 right-0 top-32 bottom-0 z-10 bg-gradient-to-b from-transparent to-opacity-0'>
                <div className='mx-auto mt-5 flex max-w-fit space-x-4'>
                    <Link
                        to="/signup"
                        className="rounded-md mx-auto max-w-fit px-5 py-2 text-base font-medium shadow-sm bg-highlight text-white cursor-pointer hover:bg-amber-500 active:bg-amber-400"
                        >
                            Get Started
                    </Link>
                </div>
            </div>
        </section>
    </>
}