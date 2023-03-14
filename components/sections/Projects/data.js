import bw from '../../../public/blomsterwerket.png';
import bidcircle from '../../../public/bidcircle.png';
import csm from '../../../public/csm.png';
import rainy from '../../../public/rainy.png';

const projectList = [
	{
		id: 1,
		name: 'Blomsterwerket',
		info: 'Self developed project targeted towards a small flower shop from a little place called Råde. First project using React in combination with Material UI. Commerce.js used as a eCommerce SDK.',
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'React',
			'Commerce.js',
			'Stripe',
		],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: bw,
		color: '#0D141B',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},
	{
		id: 2,
		name: 'BidCircle',
		info: 'Built with Vite, React, and Tailwind, BidCircle allows users to bid on various items using an API provided by my school. The site also includes a login and logout system to ensure the security of user information. This project challenged me to improve my skills in frontend development and API integration',
		technologies: [
			'React',
			'Vite',
			'Swagger API',
			'TailwindCSS',
			'Framer Motion',
		],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: bidcircle,
		color: '#CECEDB',
		text: 'black',
		github: 'https://github.com/bmsf/semester-project-2',
		link: 'https://starlit-lamington-b689b0.netlify.app/',
	},
	{
		id: 3,
		name: 'Community Science Museum',
		info: 'School project with a goal to develop and design a website for a fictional Community Sience Musem. The project was to test our abilites in the subjects we had in our first semester at Noroff Frontend-Development studies.',
		technologies: ['HTML', 'CSS', 'Adobe XD'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: csm,
		color: '#1C1C1C',
		github: 'https://github.com/bmsf/semesterproject1',
		link: 'https://fervent-panini-f6e9ad.netlify.app/',
	},
	{
		id: 4,
		name: 'Rainy Days',
		info: 'Cross course project from studies at Noroff. Focused on design through planning, wireframing and making prototype before using only HTML and CSS to create. After starting with JavaScript I added some functionality like adding items to cart and updating cart through localstorage.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
		bgTech: 'hsla(0, 0%, 100%, 0.1)',
		img: rainy,
		color: '#6C3B01',
		github: 'https://github.com/bmsf/eksamen',
		link: 'https://wonderful-payne-f634cd.netlify.app/',
	},
];

export default projectList;
