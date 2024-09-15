import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="flex flex-col flex-wrap">
          <div className="h-48 w-48 flex-col">
            <Image
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
              src={image.url}
            />
          </div>
          <div key={image.id} className="max-w-[192] truncate">
            {image.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>Please Sign In</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
