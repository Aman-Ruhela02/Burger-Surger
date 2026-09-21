import { motion, useInView, easeInOut } from "framer-motion"
import { useRef } from "react"

const Spices = () => {

    const ref = useRef(null)

    const isInView = useInView(ref,{
        once:true,
        amout:1
    })

  return (
    <>
      <main className="flex flex-col bg-[#FFF7ED] ">
        <div className="flex flex-col mt-10 justify-center items-center">
            <p className="text-[#ed2b1c] font-medium text-xl">EXPERIENCE</p>
            <h1 className="flex justify-center items-center text-center mt-5 font-extrabold text-[#ed2b1c] text-5xl font-['Indie_Flower',cursive] [-webkit-text-stroke:1px_white]">FOOD THAT</h1>
            <h2 className="flex justify-center items-center text-center mt-5 font-extrabold text-[#ed2b1c] text-5xl font-['Indie_Flower',cursive] [-webkit-text-stroke:1px_white]">FEELS GOOD</h2>
        </div>
        <div ref={ref} className="flex flex-col justify-center items-center ml-20 overflow-hidden  md:flex md:flex-row md:justify-between  mt-25 mr-20 mb-25">
            <motion.div 
            animate={
                isInView
            ? {
                x: 0,
                rotate: -360,
              }
            : {
                x: 1000,
              }
            }
            
            initial={{
                x:1000,
                ease:"easeInOut"
            }}

            transition={{
                duration:2
            }}
            className="image w-[110] md:w-[40%] flex overflow:hidden "
            ><motion.img 
            animate={{
            y:[0,-10,0]
        }}
        transition={{
            duration:3,
            repeat:Infinity,
            ease:easeInOut
        }}
            className="w-full md:w-110" src="/ChatGPT Image Sep 18, 2026, 02_01_35 PM.png" alt="" />
            </motion.div>
           
            <div className=" flex flex-col md:w-[50%] mt-10 gap-2 md:flex md:flex-col  md:items-center md:mt-20 ">
                <h1 className="text-center font-medium text-2xl  font-['sans-serif'] ">480 kcal</h1>
                <hr className="h-[4px] rounded-2xl w-full border-0  bg-yellow-400"/>
                <h1 className="text-center font-medium text-2xl  font-['sans-serif'] ">High Protein</h1>
                <hr className="h-[4px] rounded-2xl w-full border-0  bg-yellow-400"/>
                <h1 className="text-center font-medium text-2xl  font-['sans-serif'] ">Fresh Daily</h1>
                <hr className="h-[4px] rounded-2xl w-full border-0  bg-yellow-400"/>
                <h1 className="text-center font-medium text-2xl  font-['sans-serif'] ">100% Real Beef</h1>
                <hr className="h-[4px] rounded-2xl w-full border-0  bg-yellow-400"/>
                <h1 className="text-center font-medium text-2xl  font-['sans-serif'] ">Zero Shortcuts</h1>
                <hr className="h-[4px] rounded-2xl w-full border-0  bg-yellow-400"/>
                <h1 className="text-center font-medium text-2xl  font-['sans-serif'] ">True Taste</h1>
                <hr className="h-[4px] rounded-2xl w-full border-0  bg-yellow-400"/>
            </div>
        </div>
      </main>
    </>
  )
}

export default Spices
