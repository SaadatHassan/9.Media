import React from "react";
import { useThunk } from "../hooks/useThunk";
import { deleteUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { ExpandablePanel } from "./ExpandablePanel";
import { AlbumsList } from "./AlbumsList";

export const UsersListItem = ({ user }) => {
  const [doDeleteUser, isDeleteLoading, loadingDeleteError] =
    useThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUser(user);
  };

  const header = (
    // wrapping in fragment will show everything in one line
    <>
      <Button
        className="mr-3"
        loading={isDeleteLoading}
        onClick={handleDeleteUser}
      >
        <GoTrashcan />
      </Button>
      {loadingDeleteError && <div>Error deleting user...</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};
