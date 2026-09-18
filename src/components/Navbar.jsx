

const Navbar = () => {
  return (
    <>
      <nav className=" h-[10vh] flex justify-between items-center font-medium text-[16px] px-10 bg-[#F8DEC2] text-[#18181B]  rounded-4xl border-b-3 border-red-400 ">
        <div>
            <h1 className="font-sans-serif text-[#E92B1B] text-4xl font-extrabold [-webkit-text-stroke:1px_white] ">Burger</h1>
        </div>
        <div>
            <ul className="hidden md:flex md:gap-10">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>OUR SPICES</li>
                <li>LOCATION</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className="flex gap-5">
            <span><button className="border-b shadow-2xs px-3 py-1 rounded-2xl bg-[#E92B1B] text-white font-medium ">BURGER</button></span>
            <span><button className="border-2 px-3 py-1 rounded-2xl ">MENU</button></span>
        </div>
      </nav>
    </>
  )
}

export default Navbar
