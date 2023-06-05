import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google';

const inter = Inter({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>{`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
