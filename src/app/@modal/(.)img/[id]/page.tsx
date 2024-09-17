import FullPageImageView from "~/components/full-image-page";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <Modal>
      <FullPageImageView id={id} />
    </Modal>
  );
}
