// app/gallery/[id]/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { imagesArray } from '../lib/images' 

interface GalleryPageProps {
  params: {
    id: string 
  }
}

export async function generateStaticParams() {
  return imagesArray.map((image) => ({
    id: image.id,
  }))
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const image = imagesArray.find(img => img.id === params.id);

  return {
    title: image ? `${image.alt} - Gallery` : 'Image Not Found',
    // You can add more metadata here, e.g., description, openGraph, etc.
  }
}

export default function SingleImagePage({ params }: GalleryPageProps) {
  const { id } = params;

  // Find the image data based on the ID from the URL
  const image = imagesArray.find(img => img.id === id);

  if (!image) {
    return (
      <section className="max-w-prose m-auto space-y-3 text-center">
        <h1 className="text-3xl font-bold">Image Not Found</h1>
        <p>The image with ID "{id}" could not be found.</p>
        <Link href="/gallery" className="text-blue-600 hover:underline">
          Back to Gallery
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-prose m-auto space-y-3 text-center">
      <h1 className="text-3xl font-bold">{image.alt}</h1>
      <Image
        src={image.src}
        width={800} // Adjust width as needed for a larger single image view
        height={600} // Adjust height as needed
        alt={image.alt}
        priority // Consider using priority for the main image on the page
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
      <p>{image.id || 'No description provided.'}</p> {/* Assuming imagesArray items might have a description */}
      <Link href="/gallery" className="text-blue-600 hover:underline mt-4 block">
        Back to Gallery
      </Link>
    </section>
  );
}
