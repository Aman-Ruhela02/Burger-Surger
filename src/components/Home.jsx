import { easeInOut, motion } from "framer-motion"

const Home = () => {
  return (
    <>
    <main className="relative flex flex-col justify-between items-center h-screen bg-[#FFF7ED] ">
      <div className="heading  ">
        <div className="pt-4 md:pt-8 flex flex-col justify-center items-center font-medium font-sans-serif text-[#461919]">
           <p>EST.2026 - SOMEWHERE GOOD</p>
           <motion.h1 className="text-[4.5rem] md:text-[10rem] text-center font-sans-serif font-extrabold 
           font-['Comic_Relief',system-ui]  [-webkit-text-stroke:3px_white] [text-shadow:0_8px_0_#D5B99D] text-[#E92B1B]">BURGER SURGER</motion.h1>
        </div>
        
      </div>
      <motion.div 
      animate={{
        x:1/2,
        y: -1/2,
        rotate:360
      }}
      initial={{
        y:-500
      }}
       
      transition={{
        duration:1
      }}
      className="burger-img absolute top-1/2 -translate-y-1/2">
        <motion.img 
        animate={{
            y:[0,-10,0]
        }}
        transition={{
            duration:3,
            repeat:Infinity,
            ease:easeInOut
        }}
        className="h-90 md:h-130" src="/ChatGPT Image Sep 17, 2026, 07_40_08 PM.png" alt="" />
      </motion.div>
      <div className="pb-8 md:pb-23 md:flex md:justify-evenly md:items-center">
        <div className=" md:pr-80 flex justify-center items-center"><h2 className="flex px-10 md:w-[70%] pt-20  justify-center items-center text-center font-['Indie_Flower',cursive] text-[20px]  ">Seared hot on the flat top, our thick-cut patties trap in every ounce of juice under a crispy, caramelized crust.</h2></div>
        <div className="md:pl-80 flex justify-center items-center"><h2 className="flex px-10 md:w-[70%]   mt-5 md:mt-0 justify-center items-center text-center font-['Indie_Flower',cursive] text-[20px]  ">Piled high with melted cheddar and our house-made spicy honey glaze, built to satisfy every single craving.</h2></div>
      </div>
    </main>
    
    </>
  )
}

export default Home
