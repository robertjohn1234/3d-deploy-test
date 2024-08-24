import Image from "next/image";
// for background image
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
// import Man from "@/components/models/Man";
const Man = dynamic(() => import("@/components/models/Man"), {
  ssr: false,
});

export default function Home() {
  return (
    // settings for background image
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Man />
        </RenderModel>
      </div>
    </main>
  );
}
