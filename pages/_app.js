import '../styles/reset.scss';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }) => 
  <Component { ...pageProps } />;

export default MyApp;