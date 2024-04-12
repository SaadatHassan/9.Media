import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import { Skeleton } from "./Skeleton";

export const UsersList = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); // here we can leave dependency array empty as well

  if (isLoading) {
    return <Skeleton count={3} />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return <div>{data.length}</div>;
};
