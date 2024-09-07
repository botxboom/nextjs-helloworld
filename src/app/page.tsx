import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany();

  return (
    <div className="flex flex-wrap gap-5">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="flex flex-col flex-wrap">
          <div className="w-48 object-contain">
            <img src={image.url} />
          </div>
          <div key={image.id}>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>Please Sign In</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
