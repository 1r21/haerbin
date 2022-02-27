import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image src="/images/loading.svg" width={150} height={150} />
    </div>
  );
}
