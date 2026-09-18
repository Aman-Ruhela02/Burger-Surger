

const Footer = () => {
  return (
    <>
      <footer className="bg-[#241813] text-white pb-10 ">

        <div>
            <div className="flex justify-between px-5 pt-8 ">
            <div>
                <ul className="flex gap-5 font-bold">
                    <li>HOME</li>
                    <li>BURGER</li>
                    <li>SPICES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
           
            <div className="pr-5">
                <h1 className="hidden sm:flex text-[#fdbe00]">2026 BURGER- All rights reserved</h1>
            </div>
            </div>
            
            <hr />
            <h1 className="mt-4 pl-5 font-[''] ">Smashed patties · toasted buns · est. 2026</h1>
        </div>
       
        <div className="flex justify-center items-center ">
            <h1 className="text-[6rem] md:text-[200px] text-[#fdbe00] font-extrabold font-['Alien_Block',sans-serif] [-webkit-text-stroke:1px_white] [text-shadow:4px_0_#D5B99D] ">Burger</h1>
        </div>
      </footer>
    </>
  )
}

export default Footer
