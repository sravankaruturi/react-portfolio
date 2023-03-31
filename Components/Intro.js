import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import profile from '../Assets/profile.png'

function Intro() {

    return (
        <section className='bg-teal-500' >
            <div className='text-center p-10 md:px-20 lg:px-40'>
                {/* <div className="relative "> */}
                <div className='py-10'>
                    <Image className='overflow-clip rounded-full w-80 h-80 flex mx-auto md:w-96 md:h-96'
                        src={profile} alt="Sravan Karuturi Image"
                    />
                    {/* </div> */}
                </div>
                <h2 className='text-5xl py-2 text-white font-semibold md:text-6xl'>SRAVAN KARUTURI</h2>
                <h3 className='text-2xl py-2 text-white font-medium md:text-3xl'>Senior Developer</h3>
                <p className='text-md py-5 leading-8 text-white md:text-xl'>Game and Engine Developer</p>
            </div>
        </section>

    );

}

export default Intro;