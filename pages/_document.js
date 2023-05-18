import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="Haider Hossain is a skilled web developer with two years of experience in the industry. He has a strong understanding of web development technologies and is able to build robust, scalable, and user-friendly websites. With a passion for creating high-quality web applications, Haider is committed to delivering exceptional results that meet his clients' needs."
                />
                <meta
                    name="keywords"
                    content="html,css,scss,js,javascript,jquery,reactjs,nextjs,vuejs,nuxtjs,bootstrap,tailwind,node,expressjs,mongodb,frontenddevelopment,webdevelopment"
                />
                <meta name="author" content="Md Haider Hossain" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
