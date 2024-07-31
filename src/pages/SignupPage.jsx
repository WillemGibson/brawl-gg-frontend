import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

export default function SignupPage(){

    return (
        <>
            <NavBar />
            <div className='bg-violet-900'>
                <div className='h-dvh flex flex-col items-center'>
                    <div class='formcontainer' className='h-2/5 w-1/2 my-10 flex-col content-center flex items-center bg-amber-400 text-center rounded border-white border-2'>
                        <SignupForm/>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}