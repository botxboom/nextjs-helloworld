import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

function MomoComponent() {
  return (
    <div className="flex flex-col content-center items-center justify-center gap-5">
      <img
        style={{ width: "500px", height: "500px", objectFit: "contain" }}
        src="https://utfs.io/f/2039a314-0727-4654-98d2-1429a23199bb-1zykk.jpeg"
      />
      <span>I Love You My Momo ❤️</span>
    </div>
  );
}

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
      <MomoComponent />
      <SignedOut></SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
