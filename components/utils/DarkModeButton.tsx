'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div
			className='flex w-16 bg-darkModeBg dark:bg-primary py-1 px-2 rounded-full mr-3 cursor-pointer'
			style={{
				justifyContent: currentTheme === 'dark' ? 'flex-end' : 'flex-start',
			}}
			onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
		>
			<motion.div
				transition={{ layout: { duration: 0.2 } }}
				layout
				className='bg-primary dark:bg-darkModeBg rounded-full p-1'
			>
				<AnimatePresence mode='wait' initial={false}>
					{currentTheme === 'dark' ? (
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
								onClick={() =>
									setTheme(currentTheme === 'dark' ? 'light' : 'dark')
								}
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
								size='1rem'
								onClick={() =>
									setTheme(currentTheme === 'dark' ? 'light' : 'dark')
								}
								className=' text-darkModeBg cursor-pointer transform transition duration-500'
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
	);
};

export default DarkModeButton;
