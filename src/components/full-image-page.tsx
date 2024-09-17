import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return <Image alt={image.url} src={image.url} width={400} height={400} />;
}
