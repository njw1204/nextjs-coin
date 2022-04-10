import { CounterProps } from "../pages/_app";

export default function Counter({ name, counter, dispatchCounter }: CounterProps) {
  return (
    <>
      <div>
        <span>
          <strong>{name ?? 'Count'}: </strong>
          <span className="count-view">{counter}</span>
        </span>
        <span className="button-container">
          <button
            className="button"
            onClick={(event) => dispatchCounter({ type: 'UP' })}>UP</button>
          <button
            className="button"
            onClick={(event) => dispatchCounter({ type: 'DOWN' })}>DOWN</button>
          <button
            className="button"
            onClick={(event) => dispatchCounter({ type: 'RESET' })}>RESET</button>
        </span>
      </div>

      <style jsx>{`
        .count-view {
          color: ${counter < 0 ? 'red' : 'inherit'};
        }

        .button-container {
          margin: 0 10px;

          button {
            margin: 0 2px;
            padding: 5px;
          }
        }
      `}</style>
    </>
  );
}
