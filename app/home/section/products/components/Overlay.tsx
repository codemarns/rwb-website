"use client";

export const Overlay = () => {
  return (
    <div
      id="products-section-overlay"
      className="absolute inset-0 h-full w-full bg-no-repeat bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: "url(/product-parallax-bg.jpg)",
      }}
    >
      <div className="h-full w-full bg-primary-100/95" />
    </div>
  );
};
