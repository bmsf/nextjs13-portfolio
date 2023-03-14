import Modal from '../utils/Modal';

const Hero = () => {
	return (
		<div className='flex flex-col w-5/6 px-6 mb-20'>
			<h1 className='text-3xl md:text-5xl z-10'>
				Hi, I'm Bjørn-Magnus, a{' '}
				<span className='text-black font-bold'>Front-End Developer</span> from
				Norway.
			</h1>
			<p className='w-2/3 py-6'>
				Welcome to my portfolio website! Here, you'll find examples of my work
				and projects, as well as more information about my skills and
				experience. I specialize in creating user-friendly websites using the
				latest technology, including React and Next.js 13.
			</p>
			<Modal />
		</div>
	);
};

export default Hero;
