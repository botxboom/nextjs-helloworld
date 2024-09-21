import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img alt={image.url} src={image.url} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
        <div className="text-xl font-bold">{image.name}</div>
        <div className="flex flex-col">
          <span>Uploaded By: {uploaderInfo.fullName}</span>
        </div>
      </div>
    </div>
  );
}
