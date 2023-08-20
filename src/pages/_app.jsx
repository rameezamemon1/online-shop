import "./css/root.css";

import { useSelector } from "react-redux";
import Provider from "../Redux/Provider";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
