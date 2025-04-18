"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface SafeImageProps extends Omit<ImageProps, "src" | "onError"> {
  src: string | null | undefined
  fallbackSrc?: string
}

export function SafeImage({ src, alt, fallbackSrc = "/colorful-abstract-flow.png", ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src && src.trim() !== "" ? src : fallbackSrc)

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  // If src is null or empty, use fallback
  if (!src || src.trim() === "") {
    return <Image src={fallbackSrc || "/placeholder.svg"} alt={alt} {...props} />
  }

  return <Image src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} {...props} />
}
