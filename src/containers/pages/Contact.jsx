import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Contact() {

	useEffect(() => {
		window.scrollTo(0, 0)
	},[])

	return(
		<Layout>
		<Helmet>
        <title>Luna | Contacto</title>
        <meta name="description" content="Luna es mi empresa si? ok" />
        <meta name="keywords" content="Comercio de cursos, Comercio de inmuebles, Portfolio personal" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://google.com" />
        <meta name="author" content="Valentin Quijano" />
        <meta name="publisher" content="Valentin Quijano" />
      </Helmet>
			<Navbar />
				<div className="pt-28">
					Contact
				</div>
			<Footer />
		</Layout>
	);
};

export default Contact;