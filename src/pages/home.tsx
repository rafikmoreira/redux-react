import { Link } from "react-router-dom";
import { useCounterReducer } from "../hooks/use-counter-reducer";

const Home = () => {
  const { count, incrementCount, incrementCountValue, decrementCount } =
    useCounterReducer();

  return (
    <div className="container">
      <h1 className="my-2">Redux + React</h1>
      <h3 className="text-danger">Counter: {count}</h3>
      <div className="my-2 d-flex justify-content-between">
        <button
          aria-label="Decrement value"
          className="btn btn-success"
          type="button"
          onClick={() => {
            decrementCount();
          }}
        >
          Decrementar
        </button>
        <button
          aria-label="Increment value"
          className="btn btn-success"
          type="button"
          onClick={() => {
            incrementCountValue(5);
          }}
        >
          Incrementar +5
        </button>
        <button
          aria-label="Increment value"
          className="btn btn-success"
          type="button"
          onClick={() => {
            incrementCount();
          }}
        >
          Incrementar
        </button>
      </div>
      <Link to={"/contador"}>Contador Page</Link>
    </div>
  );
};

export default Home;
