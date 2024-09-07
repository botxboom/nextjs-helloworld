"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

function MomoComponent() {
  return (
    <div className="flex flex-col content-center items-center justify-center gap-5">
      <img
        className="rounded-full object-cover"
        style={{ width: "50px", height: "50px" }}
        src="https://utfs.io/f/0470a22f-e97f-4728-88f6-4acfded9a132-1zykk.jpeg"
      />
    </div>
  );
}

function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="flex flex-row items-center gap-5">
        <MomoComponent />
        Momo ❤️
      </div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="flex flex-row gap-5">
          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
