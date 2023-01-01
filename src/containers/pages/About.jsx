import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
import { useEffect } from 'react';
import Header from 'components/about/Header';
import TestStats from 'components/about/TestStats';
import Images from 'components/about/Images';
import Clients from 'components/about/Clients';
import Features from 'components/about/Features';
import Team from 'components/about/Team';
import { Helmet } from 'react-helmet-async';

function About() {

	useEffect(() => {
		window.scrollTo(0, 0)
	},[])

	return(
		<Layout>
		<Helmet>
        <title>Luna | Quienes somos</title>
        <meta name="description" content="Luna es mi empresa si? ok" />
        <meta name="keywords" content="Comercio de cursos, Comercio de inmuebles, Portfolio personal" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://google.com" />
        <meta name="author" content="Valentin Quijano" />
        <meta name="publisher" content="Valentin Quijano" />
      </Helmet>
			<Navbar />
				<div className="pt-28">
					<Header />
					<TestStats />
					<Images />
					<Clients />
					<Features />
					<Team />
					<div className="bg-white">
				      <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
				        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				          <span className="block">Ready to dive in?</span>
				          <span className="block text-indigo-600">Start your free trial today.</span>
				        </h2>
				        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				          <div className="inline-flex rounded-md shadow">
				            <a
				              href="#"
				              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
				            >
				              Get started
				            </a>
				          </div>
				          <div className="ml-3 inline-flex rounded-md shadow">
				            <a
				              href="#"
				              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
				            >
				              Learn more
				            </a>
				          </div>
				        </div>
				      </div>
				    </div>
				</div>
			<Footer />
		</Layout>
	);
};

export default About;