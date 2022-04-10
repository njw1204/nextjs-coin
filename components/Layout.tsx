import Head from "next/head";
import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  title?: string;
}

export default function Layout({ title, children }: PropsWithChildren<LayoutProps>) {
  const titleText = `${title} | NextJS`;

  return (
    <>
      <Head>
        {title ? (
          <>
            <title>{titleText}</title>
            <meta key="title" name="title" content={titleText} />
          </>
        ): null}
      </Head>

      <div className="layout-container">
        <div className="layout">
          <NavBar />
          {children}
        </div>
      </div>

      <style jsx>{`
        .layout-container {
          display: flex;
          padding: 10px;
          justify-content: center;

          .layout {
            width: 100%;
            max-width: 960px;
            padding: 10px;
            background-color: #f5f5f5;
          }
        }
      `}</style>
    </>
  );
}
