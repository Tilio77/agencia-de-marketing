import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

function Cases() {
	return(
		<Layout>
			<Navbar />
				<div className="pt-28">
					Cases
				</div>
			<Footer />
		</Layout>
	);
};

export default Cases;