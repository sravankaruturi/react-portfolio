import Image from 'next/image';
import profile from '../public/profile.png'

function Intro(){

    return (
        <section className='min-h-screen bg-teal-500' >
            <div className='text-center p-10 md:px-20 lg:px-40'>
                <div className="relative ">
                <div className='py-10'>
                    <Image className='overflow-clip rounded-full w-80 h-80 flex mx-auto md:w-96 md:h-96' src={profile} />
                </div>
                </div>
                <h2 className='text-5xl py-2 text-white font-semibold md:text-6xl'>SRAVAN KARUTURI</h2>
                <h3 className='text-2xl py-2 text-white font-medium md:text-3xl'>Developer</h3>
                <p className='text-md py-5 leading-8 text-white md:text-xl'>Game Developer and Full Stack Developer</p>
            </div>
        </section>

    );

}

export default Intro;