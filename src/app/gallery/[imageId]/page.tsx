import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { StaticImageData } from 'next/image'
import type { Metadata } from 'next'
import {imagesArray} from '../../lib/images' 


import Ibanez from '../../../public/ibanez.png'
import Fender from '../../../public/fender.png'

interface ImagePageProps {
  params: {
    imageId: string
  }
}

const images: Record<
  string,
  { src: StaticImageData; alt: string; description: string }
> = {
  ibanez: {
    src: Ibanez,
    alt: 'Ibanez Guitar',
    description: 'A high-quality Ibanez electric guitar, perfect for metal.',
  },
  fender: {
    src: Fender,
    alt: 'Fender Guitar',
    description: 'A classic Fender Stratocaster ideal for blues and rock.',
  },
}


export function generateStaticParams() {
    return imagesArray.map((img) => img.id)   
}
  
// ✅ Add this function for SEO
export async function generateMetadata({
  params,
}: {
  params: { imageId: string }
}): Promise<Metadata> {
  const image = images[params.imageId]

  if (!image) {
    return {
      title: 'Image not found',
      description: 'The requested image could not be found.',
    }
  }

  return {
    title: `${image.alt} - Gallery`,
    description: image.description,
    openGraph: {
      title: `${image.alt} - Gallery`,
      description: image.description,
      images: [
        {
          url: image.src.src, // ✅ next/image static import gives .src
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${image.alt} - Gallery`,
      description: image.description,
      images: [image.src.src],
    },
  }
}

export default function ImagePage({ params }: ImagePageProps) {
  const image = images[params.imageId]

  if (!image) {
    notFound()
  }

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      <Image src={image.src} width={800} height={600} alt={image.alt} />
      <p className="text-lg font-medium">{image.alt}</p>
    </div>
  )
}
