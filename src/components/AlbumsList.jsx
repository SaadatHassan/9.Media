import React from "react";
import { ExpandablePanel } from "./ExpandablePanel";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import { Skeleton } from "./Skeleton";
import Button from "./Button";
import { AlbumListItem } from "./AlbumListItem";

export const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isFetching) {
    content = <Skeleton count={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error while fetching albums...</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};
