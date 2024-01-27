import Head from 'next/head';


import AppCursor from '@/components/cursor';

// ============ Style ============
import 'aos/dist/aos.css';
import '@/styles/globals.css';
import { SnackbarProvider } from 'notistack';



// =====================================================================================================

export default function App(props: any) {

  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page: any) => page);





  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* More Generic SEO META Tags here */}
      </Head>

      <AppCursor />
      <SnackbarProvider>
        {getLayout(<Component {...pageProps} />)}
      </SnackbarProvider>

      {/* <div className='flex items-center justify-center h-[100vh] w-full'>
      <p className='text-center text-xl font-extrabold'>You&apos;re lost</p>
      </div> */}

    </>
  )
}
