import "setimmediate";
import "../styles/global.css";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Head from "next/head";
import { AppProps } from "next/app";
import { StyleSheet, Text, View } from "react-native";
import { maxContentAreaWidth } from "../functions/constants";
import Root from "../Root";

export default function App({ Component, pageProps }: AppProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  function handleWindowSizeChange() {
    setIsDesktop(window.innerWidth > maxContentAreaWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Example</title>
        <meta key="title" name="title" content="Example" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <SafeAreaProvider>
        <View style={styles.websiteArea}>
          <View style={styles.contentArea}>
            <Root Component={Component} pageProps={pageProps} />
          </View>
        </View>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  websiteArea: {
    maxWidth: 1400,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    minHeight: "100%",
  },
  contentArea: {
    flex: 1,
    maxWidth: maxContentAreaWidth,
    width: "100%",
    minHeight: "100%",
  },
});
