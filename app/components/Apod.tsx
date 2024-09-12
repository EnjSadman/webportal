'use client';

import Image from 'next/image';

interface Props {
  srcAttribute: string;
  altAttribute: string;
}

export function Apod({ srcAttribute, altAttribute }: Props) {
  return (
    <div className="relative">
      <Image
        layout="responsive"
        src={srcAttribute}
        alt={altAttribute}
        width={16}
        height={9}
      />
    </div>
  );
}
