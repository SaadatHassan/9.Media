import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import { Skeleton } from "./Skeleton";
import Button from "../components/Button";
import { useThunk } from "../hooks/useThunk";
import { UsersListItem } from "./UsersListItem";

export const UsersList = () => {
  const [doFetchUsers, isUsersLoading, loadingUserError] = useThunk(fetchUsers);
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doAddUser();
  };

  let content;

  if (isUsersLoading) {
    content = <Skeleton count={6} className="h-6 w-full" />;
  } else if (loadingUserError) {
    content = <div>Error fetching data</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} primary onClick={handleAddUser}>
          + Add User
        </Button>
        {creatingUserError && "error while creating user..."}
      </div>
      <div>{content}</div>
    </div>
  );
};
