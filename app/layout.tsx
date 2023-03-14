import Providers from './Providers';
import Navbar from '@/components/sections/Navbar';
import './globals.css';

export const metadata = {
	title: 'Portfolio - Bjørn-Magnus Fromreide',
	description: 'Portfolio showcasing for Bjørn-Magnus Fromreide',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className='flex flex-col items-center bg-primary text-secondary dark:bg-darkModeBg dark:text-primary overflow-x-hidden'>
				<Providers>
					<Navbar />
					<div>{children}</div>
				</Providers>
			</body>
		</html>
	);
}
