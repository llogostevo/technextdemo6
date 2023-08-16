import Image from 'next/image'

export default function AirBNB() {
  return (
    <header className="flex justify-center p-4">
      <div className="basis-1/4">
        <h1>Air BnB</h1>
      </div>
      <div className="basis-2/4 ">
        <nav className="border border-solid rounded-full p-4 hover:shadow-lg">
            <ul className="flex space-x-10">
                <li className="basis-1/3">Anywhere</li>
                <li className="basis-1/3">Any week</li>
                <li className="basis-1/3">Add Guests</li>
            </ul>
        </nav>
      </div>
      <div className="flex basis-1/4 ">
        <p className=" basis-1/2">Airbnb your home</p>
        <p className=" basis-1/2">o</p>
      </div>
    </header>
  )
}
