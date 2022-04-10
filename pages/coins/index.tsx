import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Coin from "../../components/Coin";
import Counter from "../../components/Counter";
import Layout from "../../components/Layout";
import { CounterProps } from "../_app";

export default function Coins({ coins, counter, dispatchCounter }: InferGetServerSidePropsType<typeof getServerSideProps> & CounterProps) {
  return (
    <Layout title="Coin">
      <h1>Coin</h1>
      <Counter
        counter={counter}
        dispatchCounter={dispatchCounter}
        name="Love w/ Coin" />
      <br />
      <div>
        {coins.map(coin => (
          <Coin
            key={coin.market}
            market={coin.market}
            koreanName={coin.korean_name}
            englishName={coin.english_name} />
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const coins = await (await fetch(`${process.env.URL}/api/markets`)).json();

  return {
    props: {
      coins,
    },
  };
};

interface ServerSideProps {
  coins: {
    market: string;
    korean_name: string;
    english_name: string;
  }[];
}
