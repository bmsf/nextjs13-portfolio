'use client';
import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Modal = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				onClick={() => setShowModal(true)}
				className='bg-button text-primary w-48 transition-all relative inline-flex items-center justify-center  overflow-hidden tracking-tighter dark:text-secondary dark:bg-primary py-4 px-6 rounded-full text-center cursor-pointer group transform'
			>
				<span className='absolute w-0 h-0 transition-all duration-500 ease-out dark:bg-darkButtonHover bg-darkButtonHover  rounded-full group-hover:w-56 group-hover:h-56'></span>
				<span className='absolute  inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent '></span>
				<span className='relative w-full  transition-colors duration-200 ease-in-out group-hover:text-white'>
					Resume
				</span>
			</button>
			<AnimatePresence>
				{showModal ? (
					<>
						<m.div
							key='modal'
							initial={{ y: '150%' }}
							animate={{ y: '0%' }}
							transition={{ duration: 0.75 }}
							exit={{ y: '150%' }}
							className='overflow-y-auto backdrop-blur-sm overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full mx-auto'
						>
							<div className='relative p-4 w-full max-w-3xl h-full md:h-auto mx-auto'>
								<div className='relative bg-darkModeBg rounded-lg shadow dark:bg-primary'>
									<div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
										<h3 className='text-xl font-semibold text-primary dark:text-darkModeBg'>
											Resume
										</h3>
										<button
											onClick={() => setShowModal(false)}
											type='button'
											className='text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
											data-modal-toggle='defaultModal'
										>
											<svg
												aria-hidden='true'
												className='w-5 h-5'
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fill-rule='evenodd'
													d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
													clip-rule='evenodd'
												></path>
											</svg>
											<span className='sr-only'>Close modal</span>
										</button>
									</div>

									<div className='p-6 flex  '>
										<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
											2021
										</p>
										<div className='flex flex-col'>
											<p className='text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
												Noroff School of technology and digital media
											</p>
											<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
												Frontend Development
											</p>
										</div>
									</div>

									<div className='p-6 flex '>
										<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
											2016
										</p>
										<div className='flex flex-col'>
											<p className='text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
												Sales Employee
											</p>
											<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
												Customer relations, sales, economic goals
											</p>
										</div>
									</div>

									<div className='p-6 flex dark:border-gray-600'>
										<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
											2015
										</p>
										<div className='flex flex-col'>
											<p className='text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
												Store Assistant
											</p>
											<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
												Sales and customer service
											</p>
										</div>
									</div>

									<div className='p-6 flex dark:border-gray-600'>
										<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
											2013
										</p>
										<div className='flex flex-col'>
											<p className='text-base leading-relaxed text-primary  dark:text-darkModeBg font-semibold'>
												Logistics Employee
											</p>
											<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
												Distribution of goods and materials
											</p>
										</div>
									</div>

									<div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600 self-end'>
										<button
											onClick={() => setShowModal(false)}
											className='bg-primary text-darkModeBg w-48 transition-all relative inline-flex items-center justify-center  overflow-hidden tracking-tighter dark:text-primary dark:bg-darkModeBg py-4 px-6 rounded-full text-center cursor-pointer group transform'
										>
											<span className='absolute w-0 h-0 transition-all duration-500 ease-out dark:bg-darkButtonHover bg-darkButtonHover  rounded-full group-hover:w-56 group-hover:h-56'></span>
											<span className='absolute  inset-0 w-full h-full mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent '></span>
											<span className='relative w-full  transition-colors duration-200 ease-in-out group-hover:text-white'>
												Close
											</span>
										</button>
									</div>
								</div>
							</div>
						</m.div>
					</>
				) : null}
			</AnimatePresence>
		</>
	);
};

export default Modal;
