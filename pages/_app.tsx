import { AppProps } from "next/app";

import "../styles/globals.css";

function NavBar() {
  return (
    <nav id="header" className="fixed w-full z-10 top-0">
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <a
            className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
            href="#"
          >
            Minimal Bingo
          </a>
        </div>
      </div>
    </nav>
  );
}

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />

      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default CustomApp;
