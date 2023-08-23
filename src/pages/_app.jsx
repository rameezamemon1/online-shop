import "./css/root.css";

import Provider from "../Redux/Provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";
const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <Provider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </UserProvider>
    </SessionProvider>
  );
};

export default MyApp;
