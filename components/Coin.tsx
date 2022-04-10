import { useRouter } from "next/router";

interface CoinProps {
  market: string;
  koreanName: string;
  englishName: string;
};

export default function Coin({ market, koreanName, englishName }: CoinProps) {
  const router = useRouter();

  return (
    <>
      <div
        className="container"
        onClick={(event) => router.push(`/coins/${market}/${koreanName}`)}>
        <h1>{market}</h1>
        <strong>{koreanName}</strong>
        <span className="label">{englishName}</span>
      </div>

      <style jsx>{`
        .container {
          display: inline-block;
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          box-shadow: 0 0 10px 3px #ddd;
          background-color: #fff;
          cursor: pointer;

          h1 {
            display: block;
            margin: 0;
            padding: 0;
          }

          .label {
            margin-left: 5px;
            font-size: 0.8em;
          }
        }
      `}</style>
    </>
  );
}
