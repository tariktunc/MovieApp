"use client";

import VerticalItem from "@/Components/Items/VerticalItem/VerticalItem";
import WhereToWatch from "@/Components/Items/WhereToWatch/WhereToWatch";

export default function Home() {
  return (
    <div className="flex justify-center">
      <WhereToWatch />
      <VerticalItem urlStatus={"day"} status={"tv"} />
    </div>
  );
}
