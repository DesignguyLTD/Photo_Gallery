import React from "react";
import { saveAs } from "file-saver";
import downloadLogo from "../assets/images/downloadLogo.svg";

const ImageCard = (props) => {
  const downloadImage = (url) => {
    saveAs(url, "image.jpg");
  };

  return (
    <figure>
      <div className="dropdown">
        <div className="download_logo">
          <img src={downloadLogo} alt="download logo" />
        </div>
        <div className="resolution_links">
          <a
            href={props.photo.src.original}
            onClick={(e) => {
              e.preventDefault();
              downloadImage(props.photo.src.large2x);
            }}
            download
          >
            high resolution
          </a>
          <a
            href={props.photo.src.medium}
            onClick={(e) => {
              e.preventDefault();
              downloadImage(props.photo.src.large2x);
            }}
            download
          >
            medium resolution
          </a>
          <a
            href={props.photo.src.small}
            onClick={(e) => {
              e.preventDefault();
              downloadImage(props.photo.src.large2x);
            }}
            download
          >
            low resolution
          </a>
        </div>
      </div>
      <img src={props.photo.src.small} alt={props.photo.alt} />
      <figcaption>
        <p className="name_of_photographer">{props.photo.photographer}</p>
        <p className="photographer_url">
          <a href={props.photo.photographer_url}>Photographer Profile</a>
        </p>
      </figcaption>
    </figure>
  );
};

export default ImageCard;
