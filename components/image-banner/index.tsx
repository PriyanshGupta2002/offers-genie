import Image from "next/image";
import React from "react";

const ImageBanner = () => {
  return (
    <div className="p-4 max-w-7xl m-auto aspect-video relative">
      <Image
        alt="banner-image"
        src={"/bannerImage.svg"}
        fill
        className="object-contain"
      />
    </div>
  );
};

export default ImageBanner;
