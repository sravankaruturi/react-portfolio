import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillMail} from 'react-icons/ai';

function Footer(){
    return (
        <section>
            <div className='py-3 text-white bg-slate-800 items-center pb-10' >
                <h3 className='flex text-2xl p-5 mx-auto font-semibold justify-center'>
                    CONTACT
                </h3>
                <div className='flex justify-center gap-14 text-5xl pb-10'>
                    <AiFillTwitterCircle />
                    <AiFillLinkedin />
                    <AiFillYoutube />
                    <AiFillGithub />
                    <AiFillMail />
                </div>
            </div>
        </section>
    );
}

export default Footer;