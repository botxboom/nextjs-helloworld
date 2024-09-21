import { FullPageImageView } from "~/common/full-image-page";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return <FullPageImageView photoId={id} />;
}
