import React from "react";
import { ExpandablePanel } from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import { PhotosList } from "./PhotosList";

export const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <div>
        <Button
          className="mr-2"
          loading={results.isLoading}
          onClick={handleRemoveAlbum}
        >
          <GoTrashcan />
        </Button>
      </div>
      <div>{album.title}</div>
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};
