import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {

    return (
        <>
        <div className='bg-black'>
            <NavBar />
            <div className='bg-violet-900'>
                <div className='h-dvh flex flex-col items-center'>
                    <div class='formcontainer' className='h-2/5 w-1/2 my-10 flex-col content-center flex items-center bg-amber-400 text-center rounded border-white border-2'>
                        <LoginForm/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

        </>
    )
}