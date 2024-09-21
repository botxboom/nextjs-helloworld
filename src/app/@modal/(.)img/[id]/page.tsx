import { FullPageImageView } from "~/common/full-image-page";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={id} />
    </Modal>
  );
}
