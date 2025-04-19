"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <Dialog
          key={image.id}
          open={selectedImage?.id === image.id}
          onOpenChange={(open) => !open && setSelectedImage(null)}
        >
          <DialogTrigger asChild>
            <div
              className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {image.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
            <div className="relative w-full h-[80vh]">
              <Image src={selectedImage?.src || ""} alt={selectedImage?.alt || ""} fill className="object-contain" />
            </div>
            {selectedImage?.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                <p className="text-white">{selectedImage.caption}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
