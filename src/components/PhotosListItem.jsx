import React from "react";
import { useRemovePhotoMutation } from "../store";
import { GoSync, GoTrashcan } from "react-icons/go";

export const PhotosListItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative cursor-pointer m-2" onClick={handleRemovePhoto}>
      <img className="h-20 w-20" src={photo.url} alt="cat's photo" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        {results.isLoading ? (
          <GoSync className="animate-spin" />
        ) : (
          <GoTrashcan className="text-3xl" />
        )}
      </div>
    </div>
  );
};
