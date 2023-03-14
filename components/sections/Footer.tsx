import { DiCode } from 'react-icons/di';

const Footer = () => {
	return (
		<footer className='p-4 rounded-lg md:px-6 md:py-8 dark:bg-darkModeBg'>
			<div className='sm:flex sm:items-center sm:justify-between '>
				<a href='./' className='flex mb-3 sm:mb-0'>
					<DiCode size='2rem' />
					<span className='pt-1'>Portfolio</span>
				</a>
				<ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-primary'>
					<li>
						<a href='#projects' className='mr-4 hover:underline md:mr-6'>
							Projects
						</a>
					</li>
					<li>
						<a href='#technologies' className='mr-4 hover:underline md:mr-6 '>
							Technologies
						</a>
					</li>
					<li>
						<a href='#contact' className='hover:underline'>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<hr className='my-6 border-gray-200 sm:mx-auto dark:primary lg:my-8' />
			<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
				© 2022{' '}
				<a href='https://flowbite.com/' className='hover:underline'>
					BMSF™
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;
