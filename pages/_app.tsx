import { AppProps } from "next/app";
import Head from "next/head";
import { Dispatch, useEffect, useReducer } from "react";
import "../styles/globals.css";

export interface DispatchAction {
  type: string;
}

export interface CounterProps {
  name?: string;
  counter: number;
  dispatchCounter: Dispatch<DispatchAction>;
}

export default function App({ Component, pageProps }: AppProps) {
  const [counter, dispatchCounter] = useReducer((state: number, action: DispatchAction) => {
    switch (action.type) {
      case 'HEARTBEAT':
        return state + 1;
      case 'UP':
        return state + (Math.trunc(Math.random() * 99) + 1);
      case 'DOWN':
        return state - (Math.trunc(Math.random() * 99) + 1);
      case 'RESET':
        return 0;
      default:
        return state;
    }
  }, 0);

  const counterProps: CounterProps = {
    counter,
    dispatchCounter,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatchCounter({ type: 'HEARTBEAT' });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>NextJS</title>
        <meta key="charset" charSet="utf-8" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta key="title" name="title" content="NextJS" />
        <meta key="description" name="description" content="NextJS Coin" />
        <meta key="keywords" name="keywords" content="NextJS, Coin" />
        <meta key="robots" name="robots" content="index, follow" />
      </Head>

      <Component
        {...pageProps}
        {...counterProps} />
    </>
  );
}
