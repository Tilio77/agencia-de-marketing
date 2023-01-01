import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
import Header from 'components/home/Header';
import Incentives from 'components/home/Incentives';
import UseCases from 'components/home/UseCases';
import Features from 'components/home/Features';
import CTA from 'components/home/CTA';
import LogoCloud from 'components/home/LogoCloud';
import BlogList from 'components/home/BlogList';
import { useEffect } from 'react';

function Home() {

	useEffect(() => {
		window.scrollTo(0, 0)
	},[])

	return(
		<Layout>
			<Navbar />
				<div className="pt-28">
					<Header />
					<Incentives />
					<UseCases />
					<Features />
					<CTA />
					<LogoCloud />
					<BlogList />
				</div>
			<Footer />
		</Layout>
	);
};

export default Home;