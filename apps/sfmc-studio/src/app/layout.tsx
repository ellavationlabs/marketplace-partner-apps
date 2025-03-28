import CustomGlobalStyles from './components/GlobalStyles/GlobalStyles';
import Providers from './components/Providers/Providers';
import './styles/global.scss';
import { ReduxProviders } from './redux/provider';
import { environment } from './lib/Constants';
import { poppins } from './lib/font';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {environment?.NEXT_PUBLIC_GTM_ID && environment?.NEXT_PUBLIC_ENABLE_GTM && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${environment?.NEXT_PUBLIC_GTM_ID}');`,
            }}></script>
        )}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${poppins.className} ${poppins.variable}`}>
        {
          environment?.NEXT_PUBLIC_GTM_ID && environment?.NEXT_PUBLIC_ENABLE_GTM && (
            /* <!-- Google Tag Manager (noscript) --> */
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${environment?.NEXT_PUBLIC_GTM_ID?.replaceAll('"', '')}"
                 height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          )
          /* <!-- End Google Tag Manager (noscript) --> */
        }

        <ReduxProviders>
          <CustomGlobalStyles />
          <Providers>{children}</Providers>
        </ReduxProviders>
      </body>
    </html>
  );
}
