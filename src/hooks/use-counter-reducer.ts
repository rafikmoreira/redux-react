import { useEffect } from "react";
import {
  increment,
  decrement,
  incrementValue,
} from "../features/counter-slice";
import { useAppDispatch } from "./use-dispatch";
import { useAppSelector } from "./use-select";

export const useCounterReducer = () => {
  const counterState = useAppSelector((state) => state.counter);
  const count = counterState.value;
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("reducer-teste:counter", JSON.stringify(counterState));
  }, [counterState]);

  const incrementCount = () => {
    dispatch(increment());
  };
  const decrementCount = () => {
    dispatch(decrement());
  };
  const incrementCountValue = (value: number) => {
    dispatch(incrementValue(value));
  };

  return { count, incrementCount, incrementCountValue, decrementCount };
};
