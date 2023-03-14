import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { DiCode } from 'react-icons/di';

import { motion, AnimatePresence } from 'framer-motion';
import DarkModeButton from '../utils/DarkModeButton';

const Navbar = ({}) => {
	return (
		<header className='flex justify-between items-center p-5 w-5/6'>
			<a href='./' className='flex'>
				<DiCode size='2rem' />
				<span className='pt-1'>Portfolio</span>
			</a>
			<nav className='hidden lg:flex'>
				<li className='mr-14'>
					<a href='#projects' className='dark:hover:text-darkButtonHover'>
						Projects
					</a>
				</li>
				<li className='mr-14'>
					<a href='#technologies' className='dark:hover:text-darkButtonHover'>
						Technologies
					</a>
				</li>
				<li>
					<a href='#contact' className='dark:hover:text-darkButtonHover'>
						Contact
					</a>
				</li>
			</nav>
			<div className='flex'>
				<DarkModeButton />
				<div className='flex'>
					<a href='https://github.com/bmsf' target='_blank' rel='noreferrer'>
						<AiFillGithub
							className='mr-3 dark:hover:text-darkButtonHover cursor-pointer transform transition duration-500 hover:scale-125'
							size='2rem'
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/bj%C3%B8rn-magnus-fromreide-18b1a1170/'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillLinkedin
							size='2rem'
							className='cursor-pointer dark:hover:text-darkButtonHover transform transition duration-500 hover:scale-125'
						/>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
