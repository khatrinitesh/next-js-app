import React, { useState, useEffect } from 'react';

export default function CustomApp() {
  const { imageSrc, setFilter } = useImageFilter(
    "https://png.pngtree.com/thumb_back/fh260/background/20230627/pngtree-round-product-and-text-placeholder-on-abstract-orange-backdrop-3d-graphic-image_3685022.jpg",
    "grayscale(100%)"
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <div>
        <img src={imageSrc} alt="Filtered Image" />
        <select onChange={handleFilterChange}>
          <option value="grayscale(100%)">Grayscale</option>
          <option value="sepia(100%)">Sepia</option>
          <option value="invert(100%)">Invert</option>
          {/* Add more filters as needed */}
        </select>
      </div>
    </div>
  );
}

const useImageFilter = (initialImageSrc, initialFilter) => {
  const [imageSrc, setImageSrc] = useState(initialImageSrc);
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    const applyFilter = () => {
      const img = new Image();
      img.src = initialImageSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.filter = filter;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const filteredImageUrl = canvas.toDataURL();
        setImageSrc(filteredImageUrl);
      };
    };

    applyFilter();
  }, [initialImageSrc, filter]);

  return { imageSrc, setFilter };
};
