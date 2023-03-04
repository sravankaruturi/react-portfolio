import {BsFillMoonStarsFill} from 'react-icons/bs';

function Navbar(){

    return (
        <section>
          <nav className='py-6 flex justify-between bg-slate-800'>
            <h1 className='text-xl font-serif text-white mx-10'> Sravan Karuturi </h1>
            <ul className='flex items-center mx-10'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl text-white' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>  
        </section>
    );

}

export default Navbar;