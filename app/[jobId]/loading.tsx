import Image from 'next/image';

export default function Loading() {
  return (
    <Image
      className="m-auto"
      src={'/assets/loading.gif'}
      width={300}
      height={300}
      alt={'loading..'}
    />
  );
}
