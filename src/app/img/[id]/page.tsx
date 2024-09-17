import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: number };
}) {
  return <FullPageImageView id={id} />;
}
