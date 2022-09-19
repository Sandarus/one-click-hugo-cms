import {getPosts} from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, {GradientBackground} from '../components/Layout';
import {getGlobalData} from '../utils/global-data';
import SEO from '../components/SEO';
import Image from "next/image";

export default function Index({posts, globalData}) {
    return (
        <Layout>
            <SEO title={globalData.name} description={globalData.blogTitle}/>
            <Header/>
            <Image src="/logo.png" alt="logo" width="290" height="67.4784" className={"main-logo"}/>
            <main className="w-full">
                <br/>
                <br/>
                <br/>
                <h1 className="text-3xl lg:text-5xl text-center mb-12">
                    Coming Soon
                </h1>
                {/*<ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>*/}
            </main>

            <div style={{paddingTop: '80px'}}>

                <div style={{width:"100%", textAlign: 'center',}} >
                    <div style={{display: "inline-block", padding: "0 5px"}}>
                        <a href={"https://www.instagram.com/erabadu.design/"} target={'_self'}>
                            <svg
                                height={"20"} width={"20"}
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"
                                tabIndex="-1">
                                <path
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                            </svg>
                        </a>
                    </div>
                    <div style={{display: "inline-block", padding: "0 5px"}}>
                        <a href={"https://www.facebook.com/erabadudesign"} target={'_self'}>
                            <svg
                                height={"20"} width={"20"}
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon"
                                tabIndex="-1">
                                <path
                                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <p style={{
                    textAlign: 'center',
                    fontSize: "12px",
                    lineHeight: "18px",
                    opacity: '0.6',
                    // paddingTop: "80px"
                }}>

                    Email: <a href="mailto:projects@erabadu.com">projects@erabadu.com</a>
                    <br/>
                    Tel: <a href="tel:+94762645475">+94 (76) 264 5475</a>
                </p>
                <Footer copyrightText={globalData.footerText}/>
                <GradientBackground
                    variant="large"
                    className="fixed top-20 opacity-40 dark:opacity-60"
                />
                <GradientBackground
                    variant="small"
                    className="absolute bottom-0 opacity-20 dark:opacity-10"
                />
            </div>

        </Layout>
    );
}

export function getStaticProps() {
    const posts = getPosts();
    const globalData = getGlobalData();

    return {props: {posts, globalData}};
}
