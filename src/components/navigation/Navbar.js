import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import luna from 'assets/img/luna.png';
import { useState } from 'react';
import DotLoader from "react-spinners/DotLoader";

function Navbar() {

	const [loading, setLoading] = useState(true)

	return (
		<nav className="w-full py-4 top-0 fixed">
			<div className="bg-white px-4 sm:px-6">
	      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
	        <Link to="/" className="ml-4 mt-2">
	          <img 
	          	src={luna}
	          	width={40}
	          	height={40}
	          	className="" 
	          />
	        </Link>
	        <div className="ml-4 mt-2 flex-shrink-0">
	        <NavLink to="/casos" className="text-md inline-flex font-bold leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 mx-4">Casos</NavLink>
	        <NavLink to="/servicios" className="text-md inline-flex font-bold leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 mx-4">Servicios</NavLink>
	        <NavLink to="/nosotros" className="text-md inline-flex font-bold leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 mx-4">Nosotros</NavLink>
	        <NavLink to="/carreras" className="text-md inline-flex font-bold leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 mx-4">Carreras</NavLink>
	        <NavLink to="/blog" className="text-md inline-flex font-bold leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 mx-4">Blog</NavLink>
	        <NavLink to="/contacto" className="text-md inline-flex font-bold leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 mx-4">Contacto</NavLink>
	          <button
	            type="button"
	            className="ml-6 relative inline-flex items-center rounded border border-transparent bg-yellow-button px-4 py-1.5 text-md font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
	          >
	            Contratanos
	            <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
	          </button>
	        </div>
	      </div>
	    </div>
		</nav>
	);
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Navbar);