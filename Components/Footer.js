import Link from 'next/link';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillMail } from 'react-icons/ai';

function Footer() {
    return (
        <section id='contact'>
            <div className='py-3 text-white bg-teal-500 items-center pb-10' >
                <h3 className='flex text-3xl p-5 mx-auto font-semibold justify-center'>
                    CONTACT
                </h3>
                <div className='flex justify-center gap-14 text-5xl pb-10'>
                    <Link
                        href="https://www.linkedin.com/in/sravankaruturi/">
                        <AiFillLinkedin />
                    </Link>
                    <Link
                        href="#"
                    >
                        <AiFillYoutube />
                    </Link>
                    <Link
                        href="https://github.com/sravankaruturi"
                    >
                        <AiFillGithub />
                    </Link>
                    <a
                        href="mailto:sravankumarkaruturi@gmail.com"
                    >
                        <AiFillMail />
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Footer;