import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
import { useEffect } from 'react';
import Header from 'components/careers/Header';
import Testimonial from 'components/careers/Testimonial';
import Features from 'components/careers/Features';
import PositionsList from 'components/careers/PositionsList';
import { Helmet } from 'react-helmet-async';

function Careers() {

	useEffect(() => {
		window.scrollTo(0, 0)
	},[])

	return(
		<Layout>
		<Helmet>
        <title>Luna | Carreras</title>
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
					<Testimonial />
					<div className="bg-gray-50">
						<div className="mx-12 pt-24 pb-12">
							<h3 className="text-5xl font-bold leading-6 text-gray-900">Work with top notch companies</h3>
						</div>
				      <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
				        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
				          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
				            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
				          </div>
				          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
				            <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
				          </div>
				          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
				            <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
				          </div>
				          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
				            <img
				              className="h-12"
				              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
				              alt="Transistor"
				            />
				          </div>
				          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
				            <img
				              className="h-12"
				              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
				              alt="Workcation"
				            />
				          </div>
				        </div>
				      </div>
				    </div>
				</div>
				<Features />
				<PositionsList />
			<Footer />
		</Layout>
	);
};

export default Careers;