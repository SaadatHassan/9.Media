import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import { Skeleton } from "./Skeleton";
import Button from "../components/Button";

export const UsersList = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); // here we can leave dependency array empty as well

  const handleAddUser = (second) => {
    dispatch(addUser());
  };

  if (isLoading) {
    return <Skeleton count={data.length} className="h-6 w-full" />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button primary onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      <div>{renderedUsers}</div>
    </div>
  );
};
