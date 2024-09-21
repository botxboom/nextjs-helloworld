import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallary App</div>

      <div className="flx flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="flex flex-row gap-5">
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
