import { Link } from "react-router-dom";
import { useCounterReducer } from "../hooks/use-counter-reducer";

const Contador = () => {
  const { count } = useCounterReducer();

  return (
    <div className="container">
      <h1>Contador</h1>
      {count}
      <div>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default Contador;
