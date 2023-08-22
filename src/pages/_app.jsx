import "./css/root.css";

import { useSelector } from "react-redux";
import Provider from "../Redux/Provider";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Header from "../components/Header";
import Footer from "../components/Footer";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Provider>
//         <Header />
//         <Component {...pageProps} />
//         <Footer />
//       </Provider>
//     </>
//   );
// }

// export default MyApp;


// import '../styles/globals.css';

// import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      {/* <Component {...pageProps} > */}
      <Provider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
      {/* </Component> */}
    </UserProvider>
  );
};

export default MyApp;
