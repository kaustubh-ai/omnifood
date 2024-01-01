/* eslint-disable no-mixed-spaces-and-tabs */
import hero from './assets/img/hero.webp'
import logo from './assets/img/omnifood-logo.png'

import customer1 from './assets/img/customers/customer-1.webp'
import customer2 from './assets/img/customers/customer-2.webp'
import customer3 from './assets/img/customers/customer-3.webp'
import customer4 from './assets/img/customers/customer-4.webp'
import customer5 from './assets/img/customers/customer-5.webp'
import customer6 from './assets/img/customers/customer-6.webp'

import app1 from './assets/img/app/app-screen-1.webp'
import app2 from './assets/img/app/app-screen-2.webp'
import app3 from './assets/img/app/app-screen-3.webp'

import logo1 from './assets/img/logos/business-insider.webp'
import logo2 from './assets/img/logos/forbes.webp'
import logo3 from './assets/img/logos/techcrunch.webp'
import logo4 from './assets/img/logos/the-new-york-times.webp'
import logo5 from './assets/img/logos/usa-today.webp'

import meal1 from './assets/img/meals/meal-1.webp'
import meal2 from './assets/img/meals/meal-2.webp'

import dave from './assets/img/customers/dave.webp'
import ben from './assets/img/customers/ben.webp'
import hannah from './assets/img/customers/hannah.webp'
import steve from './assets/img/customers/steve.webp'

import gallery1 from './assets/img/gallery/gallery-1.jpg'
import gallery2 from './assets/img/gallery/gallery-2.jpg'
import gallery3 from './assets/img/gallery/gallery-3.jpg'
import gallery4 from './assets/img/gallery/gallery-4.jpg'
import gallery6 from './assets/img/gallery/gallery-6.jpg'
import gallery7 from './assets/img/gallery/gallery-7.jpg'
import gallery8 from './assets/img/gallery/gallery-8.jpg'
import gallery11 from './assets/img/gallery/gallery-11.jpg'

import Icon from './components/common/icons.jsx'

// console.log(window.getComputedStyle(document.body).getPropertyValue('font-size'))

const body = document.getElementsByTagName('BODY')[0];
let width = body.offsetWidth;

window.addEventListener('resize', onResizeEvent, true);

function onResizeEvent() {
	const bodyElement = document.getElementsByTagName('BODY')[0];
	const newWidth = bodyElement.offsetWidth;
	if (newWidth !== width) {
		width = newWidth;
		console.log(window.getComputedStyle(document.body).getPropertyValue('font-size'))
	}
}

function App() {
	return (
		<>
			{/*Navbar*/}
			<section className='bg-primary-100'>
				<header className='mx-auto flex h-24 items-center justify-between px-16 max-w-8xl'>
					<div>
						<a href='#'>
							<img className='h-5' src={logo} alt='logo'/>
						</a>
					</div>
					
					<nav>
						<ul className='flex items-center gap-8'>
							
							{/*<ul className='flex items-center gap-8 [@media(max-width:1100px)]:gap-6'>*/}
							<li>
								<a className='text-lg transition duration-300 text-grey-700 font-rubik500 hover:text-primary-600'
								   href='#'>How it works</a></li>
							<li>
								<a className='text-lg transition duration-300 text-grey-700 font-rubik500 hover:text-primary-600'
								   href='#'>Meals</a></li>
							<li>
								<a className='text-lg transition duration-300 text-grey-700 font-rubik500 hover:text-primary-600'
								   href='#'>Testimonials</a></li>
							<li>
								<a className='text-lg transition duration-300 text-grey-700 font-rubik500 hover:text-primary-600'
								   href='#'>Pricing</a></li>
							<li><a className='rounded-lg px-6 py-3 text-white bg-primary hover:bg-primary-600' href='#'>Try
								for free
							</a></li>
						</ul>
					</nav>
				</header>
			</section>
			
			{/*Hero*/}
			<section className='pt-12 pb-20 bg-primary-100'>
				{/*<div className='mx-auto grid grid-cols-2 items-center gap-24 px-16 max-w-8xl xl:gap-16'>*/}
				<div className='mx-auto grid grid-cols-2 items-center gap-24 px-16 max-w-8xl'>
					<div>
						<h1 className='mb-8 text-5xl tracking-tighter font-rubik700 text-grey-700 md:text-xs'>
							A healthy meal delivered to your door, every single day
						</h1>
						<p className='mb-12 text-xl'>
							The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored
							to your
							personal tastes and nutritional needs.
						</p>
						<div className='mb-20'>
							<a href='#'
							   className='mr-4 inline-block rounded-lg px-8 py-4 text-xl text-white transition duration-300 font-rubik600 bg-primary hover:bg-primary-600'>
								Start eating well
							</a>
							<a href='#'
							   className='inline-block rounded-lg bg-white px-8 py-4 text-xl transition duration-300 font-rubik600 text-grey hover:bg-primary-100 hover:shadow-herolearnmore'>
								Learn more &darr;
							</a>
						</div>
						<div className='flex items-center gap-4'>
							<div className='flex'>
								<img className='-mr-4 h-12 w-12 rounded-full border-2 border-primary-100 last:mr-0' src={customer1}
								     alt='Customer photo'/>
								<img className='-mr-4 h-12 w-12 rounded-full border-2 border-primary-100 last:mr-0' src={customer2}
								     alt='Customer photo'/>
								<img className='-mr-4 h-12 w-12 rounded-full border-2 border-primary-100 last:mr-0' src={customer3}
								     alt='Customer photo'/>
								<img className='-mr-4 h-12 w-12 rounded-full border-2 border-primary-100 last:mr-0' src={customer4}
								     alt='Customer photo'/>
								<img className='-mr-4 h-12 w-12 rounded-full border-2 border-primary-100 last:mr-0' src={customer5}
								     alt='Customer photo'/>
								<img className='-mr-4 h-12 w-12 rounded-full border-2 border-primary-100 last:mr-0' src={customer6}
								     alt='Customer photo'/>
							</div>
							<p>
								<span className='text-primary-600 font-rubik700'>2,50,000+</span> meals delivered last
								year!
							</p>
						</div>
					</div>
					
					<div>
						<img src={hero} alt='hero image'/>
					</div>
				</div>
			</section>
			
			{/*Featured In*/}
			<section className='mt-24'>
				<div className='mx-auto px-16 text-center max-w-8xl'>
					<div className='text-base uppercase tracking-wider font-rubik500 text-primary-600'>
						As featured in
					</div>
					<div className='mt-4 flex justify-between'>
						<img className='h-8 opacity-50 brightness-0' src={logo1} alt='Techcrunch logo'/>
						<img className='h-8 opacity-50 brightness-0' src={logo2} alt='Business Insider logo'/>
						<img className='h-8 opacity-50 brightness-0' src={logo3} alt='The New York Times logo'/>
						<img className='h-8 opacity-50 brightness-0' src={logo4} alt='Forbes logo'/>
						<img className='h-8 opacity-50 brightness-0' src={logo5} alt='USA Today logo'/>
					</div>
				</div>
			</section>
			
			{/*How It Works*/}
			<section className='mt-24'>
				<div className='mx-auto px-16 max-w-8xl'>
					<div className='text-center'>
						<p className='text-base uppercase tracking-wider font-rubik500 text-primary-600'>
							How it works
						</p>
						<h2 className='mt-4 text-4xl leading-tight font-rubik700 text-grey-700'>
							Your daily dose of health in 3 simple steps
						</h2>
					</div>
					
					<div className='mt-20 grid grid-cols-2 place-items-center gap-x-16 gap-y-24'>
						<div>
							<p className='mb-3 text-7xl font-rubik600 text-grey-100'>01</p>
							<h3 className='mb-2 text-2xl leading-tight font-rubik700 text-grey-700'>
								Tell us what you like (and what not)
							</h3>
							<p className='text-lg leading-relaxed text-grey'>
								Never again waste time thinking about what to eat! Omnifood AI will create a 100%
								personalized weekly
								meal plan just for you. It makes sure you get all the nutrients and vitamins you need,
								no matter what
								diet you follow!
							</p>
						</div>
						<div className='relative flex items-center justify-center'>
							<img className='w-5/12' src={app1} alt='iPhone app preferences selection screen'/>
							<div className='absolute top-1/2 left-1/2 -z-20 w-1/3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-100 p-[33.33%]'></div>
							<div className='absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full w-[28%] bg-primary-200 p-[28%]'></div>
						</div>
						
						<div className='relative flex items-center justify-center'>
							<img className='w-5/12' src={app2} alt='iPhone app preferences selection screen'/>
							<div className='absolute top-1/2 left-1/2 -z-20 w-1/3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-100 p-[33.33%]'></div>
							<div className='absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full w-[28%] bg-primary-200 p-[28%]'></div>
						</div>
						<div>
							<p className='mb-3 text-7xl font-rubik600 text-grey-100'>02</p>
							<h3 className='mb-2 text-2xl leading-tight font-rubik700 text-grey-700'>
								Approve your weekly meal plan
							</h3>
							<p className='text-lg leading-relaxed text-grey'>
								Once per week, approve the meal plan generated for you by Omnifood AI. You can change
								ingredients,
								swap entire meals, or even add your own recipes.
							</p>
						</div>
						
						<div>
							<p className='mb-3 text-7xl font-rubik600 text-grey-100'>03</p>
							<h3 className='mb-2 text-2xl leading-tight font-rubik700 text-grey-700'>
								Receive meals at convenient time
							</h3>
							<p className='text-lg leading-relaxed text-grey'>
								Best chefs in town will cook your selected meal every day, and we will deliver it to
								your door
								whenever works best for you. You can change delivery schedule and address daily!
							</p>
						</div>
						<div className='relative flex items-center justify-center'>
							<img className='w-5/12' src={app3} alt='iPhone app preferences selection screen'/>
							<div className='absolute top-1/2 left-1/2 -z-20 w-1/3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-100 p-[33.33%]'></div>
							<div className='absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full w-[28%] bg-primary-200 p-[28%]'></div>
						</div>
					</div>
				</div>
			</section>
			
			{/*Meals*/}
			<section className='mt-24'>
				<div className='mx-auto px-16 max-w-8xl'>
					<div className='text-center'>
						<p className='text-base uppercase tracking-wider font-rubik500 text-primary-600'>
							Meals
						</p>
						<h2 className='mt-4 text-4xl leading-tight font-rubik700 text-grey-700'>
							Omnifood AI chooses from 5,000+ recipes
						</h2>
					</div>
					
					<div className='mt-20 mb-12 grid justify-center gap-x-16 grid-cols-[30%_30%_27%]'>
						<div className='overflow-hidden rounded-xl transition duration-400 shadow-mealcard hover:shadow-mealcardhover hover:-translate-y-3'>
							<div>
								<img src={meal1} alt='meals'/>
							</div>
							<div className='pt-8 pr-12 pb-12 pl-12'>
								<div className='mb-3 flex gap-1'>
										<span className='font-rubik600 text-[#51cf66] rounded-full uppercase text-xs py-1 px-2 bg-[#dcf5e0]'>
											Vegetarian
										</span>
								</div>
								<p className='mb-8 text-3xl text-grey-700 font-rubik600'>Japanese Gyozas</p>
								<ul className='flex flex-col gap-5'>
									<li className='flex items-center gap-4 text-lg'>
										<Icon id='calories' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-' width='2rem' height='2rem'></Icon>
										<span><span className='font-rubik500 text-grey'>650</span> calories</span>
									</li>
									<li className='flex items-center gap-4 text-lg'>
										<Icon id='cutlery' fill='fill-primary' stroke='stroke-primary' strokeWidth='' width='2rem' height='2rem'></Icon>
										<span>NutriScore &reg; <strong>74</strong></span>
									</li>
									<li className='flex items-center gap-4 text-lg'>
										<Icon id='star' fill='fill-primary' stroke='stroke-primary' strokeWidth='' width='2rem' height='2rem'></Icon>
										<span><strong>4.9</strong> rating (537)</span>
									</li>
								</ul>
							</div>
						</div>
						
						<div className='overflow-hidden rounded-xl transition duration-400 shadow-mealcard hover:shadow-mealcardhover hover:-translate-y-3'>
							<div>
								<img src={meal2} alt='meals'/>
							</div>
							<div className='pt-8 pr-12 pb-12 pl-12'>
								<div className='mb-3 flex gap-1'>
										<span className='font-rubik600 text-[#94d82d] rounded-full uppercase text-xs py-1 px-2 bg-[#eaf7d5]'>
											Vegan
										</span>
									<span className='font-rubik600 text-amber-500 rounded-full uppercase text-xs py-1 px-2 bg-[#fff6d8]'>
											Paleo
										</span>
								</div>
								<p className='mb-8 text-3xl text-grey-700 font-rubik600'>Avocado Salad</p>
								<ul className='flex flex-col gap-5'>
									<li className='flex items-center gap-4 text-lg'>
										<Icon id='calories' fill='fill-primary' stroke='stroke-primary' width='2rem' height='2rem'></Icon>
										<span><span className='font-rubik500 text-grey'>400</span> calories</span>
									</li>
									<li className='flex items-center gap-4 text-lg'>
										<Icon id='cutlery' fill='fill-primary' stroke='stroke-primary' width='2rem' height='2rem'></Icon>
										<span>NutriScore &reg; <strong>92</strong></span>
									</li>
									<li className='flex items-center gap-4 text-lg'>
										<Icon id='star' fill='fill-primary' stroke='stroke-primary' width='2rem' height='2rem'></Icon>
										<span><strong>4.8</strong> rating (441)</span>
									</li>
								</ul>
							</div>
						</div>
						
						<div className='whitespace-nowrap'>
							<h3 className='text-3xl font-rubik700 text-grey-700'>Works with any diet:</h3>
							<ul className='mt-4 flex flex-col gap-4'>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Vegetarian</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Vegan</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Pescatarian</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Gluten-free</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Lactose-free</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Keto</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Paleo</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Low FODMAP</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Kid-friendly</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Kid-friendly</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Kid-friendly</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Kid-friendly</span>
								</li>
								<li className='flex items-center gap-1 text-lg'>
									<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
									<span>Kid-friendly</span>
								</li>
							</ul>
						</div>
					</div>
					
					<div className='text-center text-lg'>
						<a href='#' className='border-b-2 transition duration-300 text-primary pb-[2px] border-primary hover:text-primary-600 hover:border-transparent'>
							See all recipes &rarr;
						</a>
					</div>
				</div>
			</section>
			
			{/*Testimonials*/}
			<section className='mt-24'>
				<div className='mx-auto grid px-16 max-w-8xl grid-cols-[2fr_1fr]'>
					<div className='rounded-l-xl p-8 bg-primary-100'>
						<div>
							<p className='text-base uppercase tracking-wider font-rubik500 text-primary-600'>
								Testimonials
							</p>
							<h2 className='mt-4 text-4xl leading-tight font-rubik700 text-grey-700'>
								Once you try it, you can&apos;t go back
							</h2>
						</div>
						
						<div className='mt-8 grid grid-cols-2 gap-x-20 gap-y-6'>
							<figure>
								<img className='m-3 w-16 rounded-full' alt='Photo of customer Dave Bryson' src={dave}/>
								<blockquote className='text-lg'>
									Inexpensive, healthy and great-tasting meals, without even having to order manually!
									It feels truly magical.
								</blockquote>
								<p className='mt-2 text-base text-grey-200'>&mdash; Dave Bryson</p>
							</figure>
							<figure>
								<img className='m-3 w-16 rounded-full' alt='Photo of customer Dave Bryson' src={ben}/>
								<blockquote className='text-lg'>
									The AI algorithm is crazy good, it chooses the right meals for me every time.
									It&apos;s amazing
									not to worry about food anymore!
								</blockquote>
								<p className='mt-2 text-base text-grey-200'>&mdash; Ben Hadley</p>
							</figure>
							<figure>
								<img className='m-3 w-16 rounded-full' alt='Photo of customer Dave Bryson' src={steve}/>
								<blockquote className='text-lg'>
									Omnifood is a life saver! I just started a company, so there&apos;s no time for
									cooking.
									I couldn&apos;t live without my daily meals now!
								</blockquote>
								<p className='mt-2 text-base text-grey-200'>&mdash; Steve Miller</p>
							</figure>
							<figure>
								<img className='m-3 w-16 rounded-full' alt='Photo of customer Dave Bryson' src={dave}/>
								<blockquote className='text-lg'>
									Inexpensive, healthy and great-tasting meals, without even having to order manually!
									It feels truly magical.
								</blockquote>
								<p className='mt-2 text-base text-grey-200'>&mdash; Dave Bryson</p>
							</figure>
							<figure>
								<img className='m-3 w-16 rounded-full' alt='Photo of customer Dave Bryson' src={hannah}/>
								<blockquote className='text-lg'>
									I got Omnifood for the whole family, and it frees up so much time! Plus, everything
									is organic
									and vegan and without plastic.
								</blockquote>
								<p className='mt-2 text-base text-grey-200'>&mdash; Hannah Smith</p>
							</figure>
							<figure>
								<img className='m-3 w-16 rounded-full' alt='Photo of customer Dave Bryson' src={dave}/>
								<blockquote className='text-lg'>
									Inexpensive, healthy and great-tasting meals, without even having to order manually!
									It feels truly magical.
								</blockquote>
								<p className='mt-2 text-base text-grey-200'>&mdash; Dave Bryson</p>
							</figure>
						</div>
					</div>
					
					<div className='grid grid-cols-2 items-center gap-4 rounded-r-xl p-4 bg-primary-100'>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery3} alt='Photo of beautifully arranged food'/>
						</figure>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery4} alt='Photo of beautifully arranged food'/>
						</figure>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery7} alt='Photo of beautifully arranged food'/>
						</figure>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery8} alt='Photo of beautifully arranged food'/>
						</figure>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery1} alt='Photo of beautifully arranged food'/>
						</figure>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery6} alt='Photo of beautifully arranged food'/>
						</figure>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery2} alt='Photo of beautifully arranged food'/>
						</figure>
						<figure className='overflow-hidden rounded-md'>
							<img className='transition duration-300 hover:scale-110' src={gallery11} alt='Photo of beautifully arranged food'/>
						</figure>
					</div>
				</div>
			</section>
			
			{/*Pricing*/}
			<section className='mt-24'>
				<div className='mx-auto px-16 max-w-8xl'>
					<div className='text-center'>
						<p className='text-base uppercase tracking-wider font-rubik500 text-primary-600'>
							Pricing
						</p>
						<h2 className='mt-4 text-4xl leading-tight font-rubik700 text-grey-700'>
							Eating well without breaking the bank
						</h2>
					</div>
					
					<div className='mt-20 mb-12 grid items-center justify-center gap-x-12 grid-cols-pricing'>
						<div className='rounded-xl border-2 p-8 transition duration-300 justify-selfend border-primary-100 hover:-translate-y-2 hover:border-transparent hover:shadow-lg'>
							<div className='mb-12 text-center'>
								<p className='mb-6 text-lg uppercase tracking-wide text-primary-600 font-rubik600'>Starter</p>
								<p className='mb-4 text-6xl font-rubik600 text-grey-700'>
									<span className='mr-2 text-3xl font-rubik500'>$</span>299
								</p>
								<p className='text-base text-grey-200'>per month. That&apos;s just $13 per meal!</p>
							</div>
							<div>
								<ul className='flex flex-col gap-4'>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>1 meal per day</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Order from 11am to 9pm</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Delivery is free</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Delivery is free</span>
									</li>
								</ul>
							</div>
							<div className='mt-12 text-center'>
								<a href='#' className='inline-block rounded-lg px-8 py-4 text-base transition duration-300 shadow-pricing text-primary font-rubik500 hover:bg-primary hover:text-white'>
									Start eating well
								</a>
							</div>
						</div>
						
						<div className='rounded-xl border-2 p-8 transition duration-300 justify-selfend border-primary-100 hover:-translate-y-2 hover:border-transparent hover:shadow-lg'>
							<div className='mb-12 text-center'>
								<p className='mb-6 text-lg uppercase tracking-wide text-primary-600 font-rubik600'>Starter</p>
								<p className='mb-4 text-6xl font-rubik600 text-grey-700'>
									<span className='mr-2 text-3xl font-rubik500'>$</span>499
								</p>
								<p className='text-base text-grey-200'>per month. That&apos;s just $13 per meal!</p>
							</div>
							<div>
								<ul className='flex flex-col gap-4'>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>1 meal per day</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Order from 11am to 9pm</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Delivery is free</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Delivery is free</span>
									</li>
								</ul>
							</div>
							<div className='mt-12 text-center'>
								<a href='#' className='inline-block rounded-lg px-8 py-4 text-base transition duration-300 shadow-pricing text-primary font-rubik500 hover:bg-primary hover:text-white'>
									Start eating well
								</a>
							</div>
						</div>
						
						<div className='relative overflow-hidden rounded-xl border-2 p-8 transition duration-300 justify-selfend border-primary-100 bg-primary-100 hover:-translate-y-2 hover:border-transparent hover:shadow-lg'>
							<div className='rotate-45 absolute top-[5%] right-[-25%] uppercase text-sm font-rubik700 text-grey-700 py-1 px-20 bg-[#ffd43b]'>
								Best Value
							</div>
							<div className='mb-12 text-center'>
								<p className='mb-6 text-lg uppercase tracking-wide text-primary-600 font-rubik600'>Starter</p>
								<p className='mb-4 text-6xl font-rubik600 text-grey-700'>
									<span className='mr-2 text-3xl font-rubik500'>$</span>999
								</p>
								<p className='text-base text-grey-200'>per month. That&apos;s just $13 per meal!</p>
							</div>
							<div>
								<ul className='flex flex-col gap-4'>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>1 meal per day</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Order from 11am to 9pm</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Delivery is free</span>
									</li>
									<li className='flex items-center gap-1 text-lg'>
										<Icon id='tick' fill='fill-primary' stroke='stroke-primary' strokeWidth='stroke-2' width='1.2rem' height='1.2rem'></Icon>
										<span>Delivery is free</span>
									</li>
								</ul>
							</div>
							<div className='mt-12 text-center'>
								<a href='#' className='inline-block rounded-lg px-8 py-4 text-base text-white transition duration-300 bg-primary shadow-pricing font-rubik500 hover:bg-primary hover:text-white'>
									Start eating well
								</a>
							</div>
						</div>
					</div>
					
					<div className='text-center'>
						<aside className=''>
							Prices include all applicable taxes. You can cancel at any time.
							Both plans include the following:
						</aside>
					</div>
					
					<div className='mt-24 grid grid-cols-4'>
						<div>
							<div className='mb-4 inline-block rounded-full p-4 bg-primary-100'>
								<Icon id='cook' fill='fill-primary' stroke='stroke-primary' width='3rem' height='3rem'></Icon>
							</div>
							<p className='mb-4 text-2xl text-grey-700 font-rubik700'>Never cook again!</p>
							<p className='text-grey'>Our subscriptions cover 365 days per year, even including major
								holidays.</p>
						</div>
						<div>
							<div className='mb-4 inline-block rounded-full p-4 bg-primary-100'>
								<Icon id='organic' fill='fill-primary' stroke='stroke-primary' width='3rem' height='3rem'></Icon>
							</div>
							<p className='mb-4 text-2xl text-grey-700 font-rubik700'>Local and organic</p>
							<p className=''>Our cooks only use local, fresh, and organic products to prepare your
								meals.</p>
						</div>
						<div>
							<div className='mb-4 inline-block rounded-full p-4 bg-primary-100'>
								<Icon id='waste' fill='fill-primary' stroke='stroke-primary' width='3rem' height='3rem'></Icon>
							</div>
							<p className='mb-4 text-2xl text-grey-700 font-rubik700'>No waste</p>
							<p className=''>All our partners only use reusable containers to package all your meals.</p>
						</div>
						<div>
							<div className='mb-4 inline-block rounded-full p-4 bg-primary-100'>
								<Icon id='clock' fill='fill-primary' stroke='stroke-primary' width='3rem' height='3rem'></Icon>
							</div>
							<p className='mb-4 text-2xl text-grey-700 font-rubik700'>Pause anytime</p>
							<p className=''>Going on vacation? Just pause your subscription, and we refund unused
								days.</p>
						</div>
					</div>
				</div>
			</section>
			
			{/*Contact Us*/}
			<section className='mt-24'>
				<div className='mx-auto px-16 max-w-8xl'>
					<div className='mb-20 grid overflow-hidden rounded-xl bg-gradient-to-br from-[#eb984e] to-primary grid-cols-contact shadow-contact'>
						<div className='pt-12 pr-14 pb-14 pl-14 text-primary-700'>
							<h2 className='mb-8 text-4xl tracking-wide font-rubik700 text-grey-700'>
								Get your first meal for free!
							</h2>
							<p className='mb-12'>
								Healthy, tasty and hassle-free meals are waiting for you. Start eating well today.
								You can cancel or pause anytime. And the first meal is on us!
							</p>
							
							<div>
								<form className='grid grid-cols-2 items-center gap-x-8 gap-y-6' action='#'>
									<div>
										<label className='mb-3 block font-rubik500' htmlFor='full-name'>Full
											Name</label>
										<input className='w-full rounded-lg p-3 text-lg bg-primary-100 focus:ring-primary-800/50 focus:outline-none focus:ring-4'
										       id='full-name' type='text' placeholder='Kaustubh Dixit' required/>
									</div>
									
									<div>
										<label className='mb-3 block font-rubik500' htmlFor='email'>Email
											address</label>
										<input className='w-full rounded-lg p-3 text-lg bg-primary-100 focus:ring-primary-800/50 focus:outline-none focus:ring-4'
										       id='email' type='email' placeholder='hi@example.com' required/>
									</div>
									
									<div>
										<label className='mb-3 block font-rubik500' htmlFor='phone'>Mobile No.</label>
										<input className='w-full appearance-none rounded-lg p-3 text-lg bg-primary-100 focus:ring-primary-800/50 focus:outline-none focus:ring-4'
										       id='phone' type='number' placeholder='mobile' min='1' required/>
									</div>
									
									<div className='relative'>
										<label className='mb-3 block font-rubik500' htmlFor='select-where'>
											Where did you hear from us?
										</label>
										<select className='w-full cursor-pointer appearance-none rounded-lg text-lg p-3.5 bg-primary-100 focus:ring-primary-800/50 focus:outline-none focus:ring-4' id='select-where' required>
											<option value=''>Please choose one option:</option>
											<option value='friends'>Friends and family</option>
											<option value='youtube'>YouTube video</option>
											<option value='podcast'>Podcast</option>
											<option value='ad'>Facebook ad</option>
											<option value='others'>Others</option>
										</select>
										<div className='absolute pointer-events-none	cursor-pointer top-[60%] right-[5%]'>
											<Icon id='down' fill='fill-primary' stroke='stroke-primary' width='1.5rem' height='1.5rem'></Icon>
										</div>
									</div>
								</form>
								
								<div className='flex justify-center'>
									<button className='hover:shadow-click transition duration-500 w-1/2 mt-10 text-center bg-[#45260a] text-primary-100 p-3 text-xl font-rubik600 rounded-md '>
										Sign up now
									</button>
								</div>
							
							</div>
						</div>
						<div className='bg-cover bg-center bg-contact' role='img' aria-label='Woman enjoying food'></div>
					</div>
				</div>
			</section>
		</>
	)
}

export default App
