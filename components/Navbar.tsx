import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { DiCode } from 'react-icons/di';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({}) => {
	const [darkMode, setDarkMode] = useState(true);
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

    

	return (
		<header
			className='flex justify-between items-center p-5 w-5/6'
			data-aos='fade-zoom-in'
			data-aos-easing='ease-in-back'
			data-aos-delay='2000'
			data-aos-offset='0'
		>
			<a
				href='./'
				className='flex'
				data-aos='fade-zoom-in'
				data-aos-duration='1000'
				data-aos-delay='2200'
			>
				<DiCode size='2rem' />
				<span className='pt-1'>Portfolio</span>
			</a>
			<nav
				className='hidden lg:flex'
				data-aos='fade-zoom-in'
				data-aos-duration='1000'
				data-aos-delay='2600'
			>
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
			<div
				className='flex'
				data-aos='fade-zoom-in'
				data-aos-duration='1000'
				data-aos-delay='3000'
			>
				<div
					className='flex w-16 bg-darkModeBg dark:bg-primary py-1 px-2 rounded-full mr-3 cursor-pointer'
					style={{ justifyContent: darkMode ? 'flex-end' : 'flex-start' }}
					onClick={() => setDarkMode(!darkMode)}
				>
					<motion.div
						transition={{ layout: { duration: 0.2 } }}
						layout
						className='bg-primary dark:bg-darkModeBg rounded-full p-1'
					>
						<AnimatePresence exitBeforeEnter initial={false}>
							{darkMode ? (
								<motion.div
									initial={{ y: -30, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: 30, opacity: 0 }}
									transition={{ duration: 0.2 }}
									key='moon'
								>
									<MdDarkMode
										className='cursor-pointer transform transition duration-500'
										size='1rem'
										onClick={() => setDarkMode(!darkMode)}
									/>
								</motion.div>
							) : (
								<motion.div
									initial={{ y: -30, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: 30, opacity: 0 }}
									transition={{ duration: 0.2 }}
									key='sun'
								>
									<MdLightMode
										// size='1rem'
										// onClick={() => setDarkMode(!darkMode)}
										// className=' text-darkModeBg cursor-pointer transform transition duration-500'
										// initial={{ y: -30, opacity: 0 }}
										// animate={{ y: 0, opacity: 1 }}
										// exit={{ y: 30, opacity: 0 }}
										// transition={{ duration: 0.2 }}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>

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
		</header>
	);
};

export default Navbar;
