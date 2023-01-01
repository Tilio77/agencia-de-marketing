import store from './store';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AnimatedRoutes from 'AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Luna</title>
        <meta name="description" content="Luna es mi empresa si? ok" />
        <meta name="keywords" content="Comercio de cursos, Comercio de inmuebles, Portfolio personal" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://google.com" />
        <meta name="author" content="Valentin Quijano" />
        <meta name="publisher" content="Valentin Quijano" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
