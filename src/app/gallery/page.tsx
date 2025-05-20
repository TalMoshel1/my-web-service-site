
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {imagesArray} from '../lib/images' // Import the images array from the lib folder

export const metadata: Metadata = {
  title: 'תמונות - מוזיקה - פיתוח',
}








export default function Gallery() {
  return (
    <section className="max-w-prose m-auto space-y-3">
      <h1 className="text-3xl text-center font-bold">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {imagesArray.map((img) => (
          <Link key={img.id} href={`/gallery/${img.id}`}>
            <Image
              src={img.src}
              width={500}
              height={500}
              alt={img.alt}
              className="cursor-pointer transition-transform hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
