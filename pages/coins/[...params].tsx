import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import Layout from "../../components/Layout";
import _404 from "../404";
import { CounterProps } from "../_app";

interface Coin {
  market?: string;
  trade_price?: number;
  change_price?: number;
  change_rate?: number;
};

export default function Coin(counterProps: CounterProps) {
  const router = useRouter();
  const [market] = Array.isArray(router.query.params) ? router.query.params : [];
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState<Coin>();
  const marketTradeBy = String(coin?.market).split('-')[0];
  const marketTradeWhat = String(coin?.market).split('-')[1];

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!market) {
      setNotFound(true);
      return;
    }

    const interval = setInterval(async() => {
      const coin: Coin = (await (await fetch(`/api/markets/${market}`)).json())[0];
      setCoin(coin);
      setLoading(false);
    }, 500);

    return () => clearInterval(interval);
  }, [router.isReady, market]);


  if (notFound) {
    return (<_404 />);
  }

  if (!loading && !coin?.market) {
    return (<_404 />);
  }

  return (
    <Layout title={coin?.trade_price ? `${Number(coin?.trade_price).toLocaleString(undefined, { maximumFractionDigits: 20 })} ${marketTradeWhat}/${marketTradeBy}` : 'Coin'}>
      <h1>Coin</h1>
      <Counter
        {...counterProps}
        name="Love w/ Coin" />
      <br />
      <div>
        {loading ? (
          <>
            <h1>Now Loading...</h1>
          </>
        ) : (
          <div className="coin-container">
            <h2>{marketTradeWhat}</h2>
            <h1 className="coin-trade-price">{Number(coin?.trade_price).toLocaleString(undefined, { maximumFractionDigits: 20 })} {marketTradeBy}</h1>
            <br />
            <span>전일대비: </span>
            <span className="coin-change-container">
              <span>{((coin?.change_price ?? 0) >= 0) ? '+' : ''}{Math.round((coin?.change_rate ?? 0) * 1000000) / 10000}%</span>
              {' '}
              <span>({((coin?.change_price ?? 0) >= 0) ? '+' : ''}{Number(coin?.change_price).toLocaleString(undefined, { maximumFractionDigits: 20 })})</span>
            </span>
          </div>
        )}
      </div>

      <style jsx>{`
        .coin-container {
          h1 {
            display: inline-block;
            margin: 0;
            padding: 0;
          }

          h2 {
            font-weight: normal;
            margin: 0;
            padding: 0;
          }
        }

        .coin-trade-price,
        .coin-change-container {
          color: ${(coin?.change_price ?? 0) >= 0 ? '#c84a31' : '#1261c4'};
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
}
