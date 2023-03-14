import { Hero, Projects } from '../components/sections/index';
import HeroImage from '@/components/HeroImage';
import Technologies from '@/components/sections/Technologies';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
	return (
		<main className=''>
			<section className='flex flex-col justify-center items-center h-screen gap-5'>
				<div className='w-5/6'>
					<Hero />
					<HeroImage />
				</div>
			</section>
			<section className='w-10/12 mx-auto'>
				<Projects />
			</section>
			<section className='w-10/12 mx-auto'>
				<Technologies />
			</section>
			<section>
				<Contact />
			</section>
			<section className='w-10/12 mx-auto'>
				<Footer />
			</section>
		</main>
	);
}
