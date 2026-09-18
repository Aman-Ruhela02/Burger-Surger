import { motion } from "framer-motion"

const Location = () => {
  return (
    <>
      <main className="bg-[#f9d833] flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mt-15">
            <p className="text-[#a12525] font-medium text-xl">TAKE AWAY</p>
            <h1 className="text-[#fcf5f5] text-center md:text-6xl text-5xl font-black mt-6 font-['Fredoka',cursive] [-webkit-text-stroke:1px_red] ">QUALITY THAT</h1>
            <h1 className="text-[#fcf5f5] text-center md:text-6xl text-5xl font-black mt-6 font-['Fredoka',cursive] [-webkit-text-stroke:1px_red] ">TRAVELS WITH YOU</h1>
            <p className="font-['Styl_Script',cursive] mt-8 flex justify-center items-center text-center">Freshly packed smash burgers, ready to go wherever you crave. <br /> From our flat-top to your table, every layer stays hot and juicy.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-15 pb-20">
            <div className="flex gap-10 px-4">
                <span className="relative w-40 h-50 md:w-50 md:h-60 ">
                    <span className="absolute text-[red] bg-[#f8efef] rounded-2xl font-bold text-[20px] -rotate-6 font-['Indie_Flower'] border-2 border-dashed -top-4 left-7 px-4 py-1 ">Noida</span>
                    <motion.img 
                    whileHover={{
                        scale:1.2
                    }}
                    className="w-full rounded-2xl h-full object-cover " src="/Burger.jpg" alt="" /></span>
                <span className="relative w-40 h-50 md:w-50 md:h-60">
                     <span className="absolute text-[red] bg-[#f8efef] rounded-2xl font-bold text-[20px] rotate-6 font-['Indie_Flower'] border-2 border-dashed -top-4 left-7 px-4 py-1 ">Delhi</span>
                    <motion.img 
                    whileHover={{
                        scale:1.2
                    }}
                    className="w-full object-cover rounded-2xl h-full " src="/🧀 Ultimate Cheese Loaded Chicken Burger 🍔 _ Crispy, Juicy & Mouth-Watering Food Photography.jpg" alt="" /></span>
            </div>
            <div className="flex gap-10">
                <span className="relative w-40 h-50 md:w-50 md:h-60">
                     <span className="absolute text-[red] bg-[#f8efef] rounded-2xl font-bold text-[20px] rotate-6 font-['Indie_Flower'] border-2 border-dashed -top-4 left-7 px-2 py-1 ">Gugugram</span>
                    <motion.img 
                    whileHover={{
                        scale:1.2
                    }}
                    className="w-full object-cover rounded-2xl h-full " src="/Ultimate Double Crispy Fried Chicken Burger with Melted Cheese.jpg" alt="" /></span>
                <span className="relative w-40 h-50 md:w-50 md:h-60">
                     <span className="absolute text-[red] bg-[#f8efef] rounded-2xl font-bold text-[20px] -rotate-6 font-['Indie_Flower'] border-2 border-dashed -top-4 left-7 px-4 py-1 ">Noida</span>
                    <motion.img 
                    whileHover={{
                        scale:1.2
                    }}
                    className="w-full object-cover rounded-2xl h-full " src="/download (6).jpg" alt="" /></span>
            </div>
        </div>
      </main>
    </>
  )
}

export default Location
