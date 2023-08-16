import {Foldit} from "next/font/google"
import {Poppins} from "next/font/google"

const foldit = Foldit({
    subsets: ["latin"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight:['300', '100'],
})

export default function FunkyFont() {
  return (
    <div className={foldit.className}>
        <h2 className={foldit.className}>Funky Fonts</h2>
        <p className={poppins.className}>POPPINS Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit laboriosam itaque veritatis aut blanditiis voluptate deserunt repellendus, rem voluptatibus unde incidunt delectus temporibus, repellat nam nihil nobis in beatae.</p>
    </div>
  )
}
