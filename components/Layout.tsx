import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}

    <footer className="bg-near-black white-80 pv5 pv6-l ph4">
      <p className="f6">
        <span className="dib mr4 mr5-ns">©2021 Nat Welch</span>
      </p>
    </footer>
  </div>
);

export default Layout;
