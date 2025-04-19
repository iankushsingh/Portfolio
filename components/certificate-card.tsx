"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  image: string
}

export default function CertificateCard({ title, issuer, date, image }: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer card-hover">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            <CardDescription>{issuer}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{date}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="relative w-full h-[60vh]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">
            {issuer} • {date}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
