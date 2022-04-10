import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Counter from "../components/Counter";
import Layout from "../components/Layout";
import { CounterProps } from "./_app";

export default function About(counterProps: CounterProps) {
  const [opacities, setOpacities] = useState([1, 0]);
  const [opacityDirection, setOpacityDirection] = useState(-0.05);
  const opacitiesRef = useRef<number[]>(opacities);
  const opacityDirectionRef = useRef<number>(opacityDirection);

  opacitiesRef.current = opacities;
  opacityDirectionRef.current = opacityDirection;

  useEffect(() => {
    const interval = setInterval(() => {
      let newOpacityDirection = opacityDirectionRef.current;

      if (opacitiesRef.current[0] < 0.05) {
        newOpacityDirection = 0.05;
      }

      if (opacitiesRef.current[0] > 0.95) {
        newOpacityDirection = -0.05;
      }

      setOpacities(opacities => [opacities[0] + newOpacityDirection, opacities[1] - newOpacityDirection]);
      setOpacityDirection(newOpacityDirection);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout title="About Us">
      <h1>About Us</h1>
      <Counter
        {...counterProps}
        name="Love w/ About Us" />
      <br />
      <div className="cover-image-slider-container">
        <div className="cover-image-slider">
          <div className="cover-image" style={{ opacity: opacities[0] }}>
            <Image
              src="https://un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/1597430564.8627.jpg"
              alt="BTC"
              layout="fill"
              quality={100} />
          </div>
          <div className="cover-image" style={{ opacity: opacities[1] }}>
            <Image
              className="image"
              src="https://bankrate.com/2021/08/10160025/What-is-Ethereum.jpeg"
              alt="ETH"
              layout="fill"
              quality={100} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .cover-image-slider-container {
          width: 100%;
          max-width: 720px;

          .cover-image-slider {
            position: relative;
            width: 100%;
            height: 0;
            padding-top: 56.25%;

            .cover-image {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      `}</style>
    </Layout>
  );
}
