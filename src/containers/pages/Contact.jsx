import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

function Contact() {
	return(
		<Layout>
			<Navbar />
				<div className="pt-28">
					Contact
				</div>
			<Footer />
		</Layout>
	);
};

export default Contact;