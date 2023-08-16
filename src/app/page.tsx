import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <nav className="flex flex-col m-10">
      <Link className="m-2 p-4 border rounded border-solid hover:bg-slate-50 hover:text-black" href="/greggs">greggs</Link>
      <Link className="m-2 p-4 border rounded border-solid hover:bg-slate-50 hover:text-black" href="/airbnb">Air BNB</Link>
      <Link className="m-2 p-4 border rounded border-solid hover:bg-slate-50 hover:text-black" href="/imagepractice">imagePractice</Link>
      <Link className="m-2 p-4 border rounded border-solid hover:bg-slate-50 hover:text-black" href="/funkyfont">funkyfont</Link>
      <Link className="m-2 p-4 border rounded border-solid hover:bg-slate-50 hover:text-black" href="/saucyscripts">saucyscripts</Link>
    </nav>
  )
}
