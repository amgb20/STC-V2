import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import {light} from './styles/Themes';
import {Helmet} from "react-helmet";

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Second Thoughts Club</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Second Thoughts Club: The NFT collection who does not give a fuck" />

            </Helmet>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
