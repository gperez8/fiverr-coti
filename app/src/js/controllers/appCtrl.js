angular.module('app')
	.controller('appCtrl', function($scope,$http)  { 

		/* Var del controlador */
			const navbar = $('.navbar');
			const logo = $('.navbar-brand');

			navbar.addClass('navbar-change');
			logo.addClass('logo-white');

			const navbarHeight = $('.navbar').height();

			$scope.response = {
				teams: 
				[
					[
						{
							fullName: 'Shahaf Bar-Geffen',
							employment: 'Ceo',
							description: 'Shahaf is the Co-Founder and CEO of WEB3, a leading provider of digital media advertising solutions. Since founding the company in 2006, Shahaf has led WEB3 to become a leading multinational digital marketing firm. Shahaf holds a B.Sc degree in Biotech and Economics from Tel Aviv University (magna cum laude) and is an Israeli Air Force officer (Major, reserves).'
						},
						{
							fullName: 'Andy Chin',
							employment: 'Software Engineering',
							description: 'Andy is a full-stack software engineer. An autodidact originally from Singapore, Andy has launched numerous titles on Steam and the AppStore. He has wide-ranging experience developing games, server applications and mobile apps.'
						},
						{
							fullName: 'Erol Hallufgil',
							employment: 'Research & Software Engineering',
							description: 'Erol is a mathematician and engineer who has for the past few several years worked in software development. His recent experience involves developing custom CRM solutions for fintech companies. He holds a Master’s Degree in Mathematics from the Technion - Israel Institute of Technology.'
						}
					],
					[
						{
							fullName: 'Tal Dadia',
							employment: 'Research Engineering',
							description: 'Tal is a blockchain research engineer who has gained backend engineering experience at several startup companies. In parallel with his work for COTI, Tal explores current applications of using blockchain and other consensus methodologies in academic research at the WZB institute in Berlin. He is studying for LL.B and Masters in Financial Economics degrees at IDC Herzliya.'
						},
						{
							fullName: 'Gregory',
							employment: 'Ceo',
							description: 'Shahaf is the Co-Founder and CEO of WEB3, a leading provider of digital media advertising solutions. Since founding the company in 2006, Shahaf has led WEB3 to become a leading multinational digital marketing firm. Shahaf holds a B.Sc degree in Biotech and Economics from Tel Aviv University (magna cum laude) and is an Israeli Air Force officer (Major, reserves).'
						},
						{
							fullName: 'Stav Perle',
							employment: 'Cryptographer',
							description: 'Stav is a cryptographer with extensive experience working in the R&D labs of IBM, Intel, Yahoo! and Gigya. She holds a B.Sc in Mathematics and Computer Science from Technion – Israel Institute of Technology, where she was awarded the Dean’s Excellency honor award in Mathematics. Stav served in the 8200 unit of the IDF Intelligence Corps and is currently pursuing an M.Sc in Computer Science at Technion.'
						}
					],
					[
						{
							fullName: 'Anton Suslonov',
							employment: 'Data Science',
							description: 'Anton brings to COTI wide-ranging expertise in blockchain technology, applied mathematics and data science. Recently, he has contributed to the Wings Foundation as an Economic Analyst dealing with various blockchain projects. Previously, he has worked in IT and risk management roles at finance company in Russia. He holds a degree in Applied Mathematics from the Moscow Institute of Physics and Technology.'
						},
						{
							fullName: 'Eyal Wagner',
							employment: 'Legal and Compliance',
							description: 'Eyal is a legal expert with vast experience in fintech. Most recently he served as the CEO of Safecap Investments and as the Group General Counsel for Markets.com. A qualified lawyer who earned his LLB from IDC Herzliya, Eyal is currently partaking in the TRIUM Global Executive MBA program (NYU Stern, LSE and HEC Paris).'
						},
						{
							fullName: 'Yair Lavi',
							employment: 'Operations',
							description: 'Yair is a finance and operations professional. For the past two years he has been advising fintech startups on various matters relating to management, marketing and regulation. In his prior formal role, he served as the CEO of Plus500UK, the FCA-regulated subsidiary of Plus500. Earlier in his career he held roles with PwC (corporate finance) and Arison Group. He is a certified accountant, and holds BA and MBA degrees from Tel-Aviv University.'
						}
					],
					[
						{
							fullName: 'Anton Suslonov',
							employment: 'Data Science',
							description: 'Anton brings to COTI wide-ranging expertise in blockchain technology, applied mathematics and data science. Recently, he has contributed to the Wings Foundation as an Economic Analyst dealing with various blockchain projects. Previously, he has worked in IT and risk management roles at finance company in Russia. He holds a degree in Applied Mathematics from the Moscow Institute of Physics and Technology.'
						},
						{
							fullName: 'Eyal Wagner',
							employment: 'Legal and Compliance',
							description: 'Eyal is a legal expert with vast experience in fintech. Most recently he served as the CEO of Safecap Investments and as the Group General Counsel for Markets.com. A qualified lawyer who earned his LLB from IDC Herzliya, Eyal is currently partaking in the TRIUM Global Executive MBA program (NYU Stern, LSE and HEC Paris).'
						},
						{
							fullName: 'Yair Lavi',
							employment: 'Operations',
							description: 'Yair is a finance and operations professional. For the past two years he has been advising fintech startups on various matters relating to management, marketing and regulation. In his prior formal role, he served as the CEO of Plus500UK, the FCA-regulated subsidiary of Plus500. Earlier in his career he held roles with PwC (corporate finance) and Arison Group. He is a certified accountant, and holds BA and MBA degrees from Tel-Aviv University.'
						}
					],
					[
						{
							fullName: 'David Assaraf (Co-Founder)',
							employment: 'Business Development',
							description: 'David served as the Chief Internal Auditor of HSBC Israel. Earlier in his career he was an Examiner in the Credit Risk Unit of the Bank of Israel’s Banking Supervision Department. He started his career at KPMG and is a chartered accountant. He holds an M.A. in Law Administration from Bar Ilan University.',
						},
						{
							fullName: 'Gilad Hirsch',
							employment: 'Finance',
							description: 'Gilad has over a decade of experience at institutions including Ernst & Young, KPMG and the Bank of Israel. He brings to COTI expertise in finance, risk management, financial service regulation and online payments. Gilad is a chartered accountant (with honors) and holds an M.A in Business Economics from Bar Ilan University.',
						},
						{
							fullName: 'Neta Salomon',
							employment: 'HR',
							description: 'Neta has been responsible for HR and administration at finance and tech companies for over 7 years. Neta holds a BA in Behavioural Sciences and an MBA in Labour Studies.',
						}
					],
					[
						{
							fullName: 'Samuel Falkon (Co-Founder)',
							employment: 'Community',
							description: 'Samuel is responsible for building and nurturing COTI’s community. A seasoned sales and marketing professional, he brings to COTI wide-ranging experience in the fintech and consumer technology domains. Samuel runs his own marketing advisory business, Gil Scott.',
						},
						{
							fullName: 'Tamar Drachli',
							employment: 'Social',
							description: 'Tamar has over 12 years of media and production experience. Winner of worldwide Viral videos competitions, Tamar worked as a writer-director in the private television sector and commercial industry. She brings a tremendous amount of experience to the social field. Tamar is in charge of analyzing and optimize all social media activities and ensure goals met.',
						},
						{
							fullName: 'Jared Ungar',
							employment: 'Business Development',
							description: 'Jared has worked at South Africa’s fastest growing payment processing startups. He is an entrepreneur who has vast experience in payments, business development and sales. Jared plays a key role in developing and nurturing COTI’s community. He is an ambitious, determined and goal-oriented individual who brings enthusiasm, charisma and charm to the initiative.',
						}
					],
					[
						{
							fullName: 'Carlos M. Martins',
							employment: 'Gibraltar Business Director',
							description: 'Carlos is a Private Banker who has worked for institutions such as Credit Suisse and Société Générale. He is in the board of Experienced Investor Funds, the Chairman of the Gibraltar Association of Compliance Officers, and he teaches Finance at the University of Gibraltar for an LSE degree course. Carlos holds a BSc degree from the University of Applied Sciences, Berne, and he is a Swiss Financial Planning Expert.',
						}
					]

				]
			}
		/* End Var del controlador*/


		window.addEventListener('scroll', function(e) {	
			const navbarCurrentPosition = document.body.scrollTop;
			if (navbarCurrentPosition >= navbarHeight) {
				navbar.removeClass('navbar-change');
				logo.addClass('logo-black');
			} else {
				navbar.addClass('navbar-change');
				logo.removeClass('logo-black');
				logo.addClass('logo-white');
			}			
		});

		$scope.team = function() {
			console.log('hola');
			window.location.href = 'view/team.html';
		}

	});