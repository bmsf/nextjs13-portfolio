import './globals.css';

export const metadata = {
	title: 'BMSF - Portfolio',
	description: 'Portfolio showcasing for Bjørn-Magnus Fromreide',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
