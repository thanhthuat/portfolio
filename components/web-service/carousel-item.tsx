import React from "react";

interface CarouselItemProps {
  item: { url: string; alt: string };
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <div className="clscarouselitem">
      <div className="clscarouselitem-content">
        <img
          className="clscarouselitem-img"
          src={item?.url || "/image/category-project/Image (2).png"}
          alt={item.alt}
        />
      </div>
    </div>
  );
};

export default CarouselItem;
