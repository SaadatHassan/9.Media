import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      // unwrap() resets to the default behavior of the promise.
      // using dispatch behavior of promise is changed so we donn't want that thats why we use unwrap()
      // here we didn't use .then() because what we are doing in finally, we would do in .then()
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  // here we can leave dependency array empty as well

  return [runThunk, isLoading, error];
};
