import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { ReactNode } from 'react';


export const metadata = {
  // Define your metadata here
}

const banner = <Banner storageKey="some-key">ForgeStack 1.3.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>ForgeStack</b>}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © ForgeStack.</Footer>

// Define sidebar order
const sidebarOrder = ["introduction", "getting-started", "usage"];

export default async function RootLayout({ children }: { children: ReactNode }) {

  let pageMap = await getPageMap();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageMap = pageMap.sort((a: any, b: any) => {
    return sidebarOrder.indexOf(a.name) - sidebarOrder.indexOf(b.name);
  });

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Your additional tags */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/tmonga2208/forgestackdocs/tree/master"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
