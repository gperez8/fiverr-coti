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
			};

			$scope.faqs = 
				[ 
					{
						category: 'ABOUT COTI',
						categoryShow: true,
						title: 'ABOUT COTI',
						questions: [
							{
								title: 'What is COTI?',
								answer: 'COTI is a payment transaction network supported by a native digital currency that can process tens-of-thousands of transactions per second. With zero fees for buyers, low-to-zero fees for sellers, and full buyer protection, COTI combines the best of traditional payment methods with the best of digital currencies.'
							},
							{
								title: 'Where is COTI based?',
								answer: 'COTI is registered in Gibraltar. The development team, investors and advisors are located across various parts of the world.'
							},
							{
								title: 'Who created COTI?',
								answer: 'COTI was created by a team of payment industry veterans and cryptography experts. For more information on the team, please visit our TEAM page.'
							}

						]
					},
					{
						category: 'OFFERING',
						categoryShow: false,
						title: 'OFFERING',
						questions: [
							{
								title: 'What problem does COTI solve?',
								answer: 'The existing payment networks are not suited to deal with new forms of commerce that have emerged over the past few years. While digital currencies like Bitcoin promise lower transaction fees and higher approval rates, they face scaling challenges and low rates of adoption in the context of payments. Moreover, they are not equipped to provide the safeguards (e.g. dispute resolution and fraud protection) that consumers and merchants have grown accustomed to. COTI is building a transparent and secure system that defers governance as much as possible. Most people care more about privacy and transaction costs than they do about non-traceability and anonymity. COTI addresses this demand by providing a payments solution that is faster, easier, more cost-effective and more reliable than existing payment networks.'
							},
							{
								title: 'What is wrong with the current financial system?',
								answer: 'Liquid assets don’t always match up with outstanding liabilities in global banking systems, and double spending issues are quite prevalent. Censorship is another disadvantage of traditional banking systems, limiting citizen access to information and opportunities. We believe in a world free of credit bubbles and subjective political and moral censorship that can provide advanced banking services with an equitable distribution of risk and fees.'
							},
							{
								title: 'Why will people use COTI rather than existing payments solutions like credit cards?',
								answer: 'Credit cards rely on infrastructure that was built many years ago by the major card networks. These networks work well when you make a purchase at your local grocery store or on Amazon. However, if you would like to do a cross-border eCommerce transaction (for example, buying something from China) or want to buy a second hand ticket to a football game from another person (peer-to-peer), your credit card will not be as useful. For a cross-border transaction, the transaction fee will be high (3%-5%, not including the FX fee), and the likelihood of you completing the transaction successfully will be low. In many cases, the transaction will be rejected because of issuer/acquirer settings and risk mitigation measures. Moreover, many legitimate businesses operating in problematic industries or jurisdictions are automatically rejected on the grounds of suspected fraud. We believe that buyers and sellers should be evaluated based on their true behaviors over time, not based on broad brush classifications. A seller with an impeccable trust record should pay zero processing fees, while a seller with a less-than-ideal record should incur higher fees.'
							},
							{
								title: 'What are the functions of COTI?',
								answer: 'COTI provides fast, easy and secure online payment solutions and an intuitive, easy-to-use exchange facility for exchanging COTI’s native currency and other digital/fiat currencies. We aim to streamline transactions between buyers and sellers by taking out the middleman. Compared to credit cards and banks, COTI’s payment network will enable you to make purchases and transfers instantaneously at zero to low fees.'
							},
							{
								title: 'How does COTI plan to become a mainstream payment solution?',
								answer: 'COTI plans to become widely adopted by offering unique solutions that address the pain points of consumers and merchants, and by providing consumers and merchants with appropriate incentives. In its initial phases, COTI will complement (rather than replace) existing payments solutions.'
							}

						]
					},
					{
						category: 'COMMUNITY',
						categoryShow: false,
						title: 'COMMUNITY',
						questions: [
							{
								title: 'Which social platforms can I follow COTI on?',
								answer: 'The existing payment networks are not suited to deal with new forms of commerce that have emerged over the past few years. While digital currencies like Bitcoin promise lower transaction fees and higher approval rates, they face scaling challenges and low rates of adoption in the context of payments. Moreover, they are not equipped to provide the safeguards (e.g. dispute resolution and fraud protection) that consumers and merchants have grown accustomed to. COTI is building a transparent and secure system that defers governance as much as possible. Most people care more about privacy and transaction costs than they do about non-traceability and anonymity. COTI addresses this demand by providing a payments solution that is faster, easier, more cost-effective and more reliable than existing payment networks.'
							},
							{
								title: 'Will updates be sent via email?',
								answer: 'Yes. You will be notified of all COTI updates following your subscription to our newsletter on the website.'
							},
							{
								title: 'Is there a development team member in the Telegram group?',
								answer: 'Yes. A member from our development team is available to answer your questions.'
							},
							{
								title: 'Why is there no automated response to frequent questions?',
								answer: 'We don’t plan on using an automated bot as it’s important for us to interact directly with the COTI community.'
							},
							{
								title: 'How can I participate in the bounty program?',
								answer: 'If you have a significant following on social media platforms and would like to help us spread the word about our upcoming Token Generation Event (TGE), we’d love for you to join our bounty program in partnership with Bounty0x.Please refer to the following links for full details : \n https://bitcointalk.org/index.php?topic=2273863.msg23054673#msg23054673 \n https://medium.com/@COTInetwork/coti-launches-bounty-program-in-partnership-with-bounty0x-31c85c748525 If you have any questions, you can reach us via email at contact@coti.io.'
							}

						]
					},
					{
						category: 'INDUSTRY',
						categoryShow: false,
						title: 'INDUSTRY',
						questions: [
							{
								title: 'How does COTI compare to other digital currencies like Ripple?',
								answer: 'Ripple is a settlement system that is used primarily by financial institutions for interbank settlement purposes. Ripple’s native currency, XRP, was developed to combat transaction spam and is increasingly marketed as a bridge currency between banks. \n COTI is not focused on working with financial institutions, but rather deals primarily in matters relating to consumer payments. COTI was developed from the ground-up to satisfy this consumer payments use case, hence its focus on trust scoring and mediation. COTI’s native currency fuels the COTI network, serves as a means of exchange between buyers and sellers and provides a way to incentivize mediators and levy transaction fees'
							},
							{
								title: 'What makes COTI unique compared to other digital currencies?',
								answer: 'COTI sets itself apart in two main ways: its Mediation System and Trust Scoring Engine. COTI’s decentralized mediation system provides buyer-seller protections in the event of billing errors, unauthorized charges, or undelivered goods or services. COTIs Trust Scoring Engine rewards highly-trusted users with low-to-zero fees, and levies higher fees on users with a higher risk profile. Additionally, COTI’s high transaction throughput makes it uniquely positioned to accommodate consumer payments at a large scale.'
							},
							{
								title: 'How will you surpass other currencies when there are no immediate and practical advantages for the end user in choosing COTI over other currencies (both digital and fiat)?',
								answer: 'COTI anticipates that the majority of payments made using the COTI network rails will be denominated in established currencies like the US dollar in the near term. Such currencies naturally benefit from strong existing network effects, and buyers and sellers are more inclined to use them. COTI’s aspiration is for its native currency to evolve into a widely-adopted currency for general payment purposes, thus becoming the Currency Of The Internet. As more people begin to see the advantages of using COTI as a transactional currency, we expect that its adoption will become more widespread. But importantly, COTI’s success does not depend on COTI’s native currency being widely adopted in general payments use cases. COTI’s native currency will always play an important role within the network, even if most transactions are made using other currencies. You can read more about this in section 4 of the Overview Document.'							
							}

						]
					},
					{
						category: 'TOKEN SALE',
						categoryShow: false,
						title: 'TOKEN SALE',
						questions: [
							{
								title: 'When is the COTI token sale?',
								answer: 'The date of COTI’s Token Generation Event (TGE) has not been released to the public. Details will soon be released via a mailer to all newsletter subscribers and via various social media channels. The best way to stay up to date is by joining our Telegram group.'
							},
							{
								title: 'How can I purchase COTI tokens?',
								answer: 'You will be able to purchase COTI tokens using cryptocurrencies (BTC, ETH) or fiat money via bank wires or credit/debit card (Visa or MasterCard).'
							},
							{
								title: 'What is the estimated supply of the COTI token?',
								answer: 'Full details of COTI’s TGE, including token supply, will be released soon.'
							},
							{
								title: 'Will I receive any bonuses for my contributions in COTI’s TGE?',
								answer: 'Full details of COTI’s TGE will be released soon.'
							},
							{
								title: 'Are there regulations on your TGE?',
								answer: 'Full details of COTI’s TGE will be released soon. Before the TGE commences, COTI will provide details of its know-your-customer (KYC) and anti-money laundering (AML) standards, as well as details regarding restricted jurisdictions.'
							},
							{
								title: 'What does it take to become an accredited investor?',
								answer: 'An accredited investor is a person or entity that can deal with securities not registered with financial authorities by satisfying one of the requirements regarding income, net worth, asset size, governance status or professional experience.'
							},
							{
								title: 'Are there any countries that are restricted from buying COTI?',
								answer: 'Citizens or residents of the following countries and/or territories can’t participate in our token sale (the list may change): People’s Republic of China, Afghanistan, Bosnia and Herzegovina, Central African Republic, Cuba, Democratic Republic of Congo, Democratic People’s Republic of Korea, Eritrea, Ethiopia, Guinea-Bissau, Iran, Iraq, Israel, Libya, Lebanon, Somalia, South Sudan, Sudan, Syria, Uganda, Vanuatu, Yemen. \n Citizens and residents of United States of America can participate only if they qualify as Accredited Investors.'
							},


						]
					},
					{
						category: 'MEDIATORS',
						categoryShow: false,
						title: 'MEDIATORS',
						questions: [
							{
								title: 'How can I earn money from COTI?',
								answer: 'To bring about an era of zero friction commerce, the main goal of COTI is to provide the world with a faster, more cost-effective and more reliable way to pay. As an individual, you can help COTI realize this goal by becoming a mediator. Mediators will be compensated in COTI’s native currency for helping with the dispute resolution process. These rewards will be significant, as mediators will play a vital role in maintaining the integrity of the COTI network.'
							},
							{
								title: 'How can I become a mediator?',
								answer: 'Individuals who would like to become mediators will be required to undergo an online assessment that will help determine if they have the aptitude to perform the mediation tasks at a high standard. Among other requirements, mediators will need to demonstrate satisfactory language proficiency. \n COTI will endeavour to make mediation open to a broad group of people and will offer online training programs that can assist candidates in acquiring the requisite knowledge for contributing to the dispute resolution process. Please refer to section 3.2 in our Overview Document for additional information. Further details on how to become a mediator and how mediators will be incentivized will be released in due course.'
							}

						]
					},

				];
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

		$scope.addClassBarHorizontal = function(index){
			const menu = $('#categories-wrapper');
			console.log('menu', menu.children[index]);
		}

		$scope.indexCategory = 0;
		$scope.selectedCategory = function(index) {
			
			if ($scope.isSearch) {
				$scope.faqsFilter = [];
				$scope.isSearch = false;
				$scope.searchTitle= '';
			} 

			let id = "#category"+$scope.indexCategory;	
			let item = document.querySelector(id);
			item.setAttribute('class','category');

			
			id = "#category"+index;	
			item = document.querySelector(id);	
			item.setAttribute('class','category category-selected');


			if (angular.isDefined($scope.indexCategory)) {
				$scope.faqs[$scope.indexCategory].categoryShow = false;
				$scope.faqs[index].categoryShow = !$scope.faqs[index].categoryShow;
			}
			$scope.indexCategory = index;
		}

		$scope.indexQuestion = undefined;
		$scope.selectedQuestion = function(index1, index2) {
			if (angular.isDefined($scope.indexQuestion) && ($scope.indexQuestion.index1 !== index1  ||
				$scope.indexQuestion.index2 !== index2)) {

				if (!$scope.isSearch) {
					$scope.faqs[$scope.indexQuestion.index1].questions[$scope.indexQuestion.index2].isOpenAnswer = false;
				} else {
					$scope.faqsFilter[$scope.indexQuestion.index1].questions[$scope.indexQuestion.index2].isOpenAnswer = false;
				}
			}

			$scope.indexQuestion = {
				index1: index1,
				index2: index2
			};			
		}

		$scope.isSearch = false;
		$scope.searchFilter = function(string) {
			$scope.isSearch = string.length > 0 ? true : false;

			if ($scope.isSearch) {
				$scope.faqsFilter = $scope.faqs.map(function(obj) {
					let aux = {};
					aux.questions = obj.questions.filter(function(obj) {
						if (obj.title.toLowerCase().includes(string.toLowerCase())) {
							return obj;
						}
					});

					if (aux !== '') {
						return aux;
					}
				});
			}
		}
	});