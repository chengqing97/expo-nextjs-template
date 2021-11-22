import React, { useState, useEffect } from "react";
import type { NextComponentType, NextPageContext } from "next";

//import pages
import MainStack from "./stacks/MainStack";

type NextPageProps = any;
type NextNavigationProps = {
  Component?: NextComponentType<NextPageContext, null, NextPageProps>;
  pageProps?: NextPageProps;
};

const Root = ({ Component, pageProps }: NextNavigationProps) => {
  return <>{Component ? <Component {...pageProps} /> : <MainStack />}</>;
};

export default Root;
