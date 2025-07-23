"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  const productID = path.split("/")[2];
  const reviewIDID = path.split("/")[4];
  console.log(productID);
  return (
    <div>
      <h1 className="text-red-600">
        {productID} ürününe ait {reviewIDID} nolu yorum bulunamadı
      </h1>
    </div>
  );
}
