import Counter from "../components/Counter";
import Layout from "../components/Layout";
import { CounterProps } from "./_app";

export default function Index(counterProps: CounterProps) {
  return (
    <Layout title="Home">
      <h1>Home</h1>
      <Counter
        {...counterProps}
        name="Love w/ Home" />
    </Layout>
  );
}
