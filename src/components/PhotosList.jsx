import React from "react";
import { PhotosListItem } from "./PhotosListItem";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import { Skeleton } from "./Skeleton";

export const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);

  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-8 w-8" count={4} />;
  } else if (error) {
    content = <div>Error while fetching photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button onClick={handleAddPhoto} loading={results.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center mx-8">
        {content}
      </div>
    </div>
  );
};
