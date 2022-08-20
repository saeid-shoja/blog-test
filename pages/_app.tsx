import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../src/redux/store";
import Layout from "../src/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  );
}

export default MyApp;
