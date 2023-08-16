import Image from "next/image"
import Platypus from "@/../public/platypus1.jpeg"
import BlobFish from "@/../public/blobFish.jpeg"

export default function Gallery() {
  return (
    <div>
    <h2>Gallery</h2>
    <div className="flex gap-4 flex-wrap justify-center">
    <Image 
        src={Platypus}
        width={400}
        // height={400}
        alt="Picture of the author"
        placeholder="blur"
    />
    <Image 
        src={BlobFish}
        width={400}
        height={400}
        alt="Picture of the author"
        placeholder="blur"
    />
    <Image 
        src={BlobFish}
        width={400}
        height={400}
        alt="Picture of the author"
        placeholder="blur"
    />
    <Image 
        src={BlobFish}
        width={400}
        height={400}
        alt="Picture of the author"
        placeholder="blur"
    />
    <Image 
        src={BlobFish}
        width={400}
        height={400}
        alt="Picture of the author"
        placeholder="blur"
    />
    </div>
    </div>
  )
}
