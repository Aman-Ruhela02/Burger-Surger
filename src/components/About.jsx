import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className=" bottom-0 left-0 w-full overflow-hidden leading-[0] ">
        <svg
          className="relative block w-full h-[30px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 
           C180,0 300,70 500,40 
           C600,10 700,15 850,40 
           C1000,65 1080,65 1200,40 
           L1200,120 
           L0,120 Z"
            fill="#ed2b1c"
          />
        </svg>
      </div>
          
      <div className="about  bg-[#ed2b1c] flex flex-col  justify-between items-center  ">
             <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-yellow-400 font-medium text-[17px] ">TOP PICK</p>
                <h1 className="flex justify-center items-center text-center mt-5 font-extrabold text-white text-7xl font-['Indie_Flower',cursive] [-webkit-text-stroke:1px_red]">JUICY CHEESY</h1>
                <h1 className="mt-5 font-extrabold text-center text-white text-7xl font-['Indie_Flower',cursive] [-webkit-text-stroke:1px_red] ">FULLY LOADED</h1>
                <p className="flex justify-center items-center text-center text-white mt-8 font-['Comic_Relief',system_ui] font-medium text-[17px] ">Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Sequi rerum unde omnis aliquid perferendis maxime?</p>
                 <button  className=" px-3 py-1 mb-5  bg-amber-300 font-bold mt-10 rounded-2xl  shadow-[0_6px_0_#b91c1c]">ORDER NOW</button>
             </div>
             <div className="flex flex-col gap-15 sm:px-5 sm:gap-2 mt-15 md:flex md:flex-row md:gap-20 pb-10">
                <motion.div 
                whileHover={{
                    scale:1.2
                }}

                transition={{
                    duration:0.1
                }}

                className="rounded-2xl overflow-hidden w-80 h-60 hover:cursor-pointer rotate-6 md:rotate-6 "><video  autoPlay loop muted playsInline className="w-full h-full object-cover" src="/vid3.mp4" alt="" /></motion.div>
                <motion.div 
                whileHover={{
                    scale:1.2
                }}

                transition={{
                    duration:0.1
                }}

                className="rounded-2xl overflow-hidden w-80 h-60 hover:cursor-pointer -rotate-6"><video autoPlay loop muted  className="object-cover w-full h-full" src="/vid1.mp4" alt="" /></motion.div>
                <motion.div
                whileHover={{
                    scale:1.2
                }}

                transition={{
                    duration:0.1
                }}
                
                className="rounded-2xl overflow-hidden w-80 h-60 hover:cursor-pointer rotate-4"><video autoPlay muted loop  className="object-cover w-full h-full" src="/vid2.mp4" alt="" /></motion.div>
             </div>
      </div>
     
      <svg
        className="relative block w-full h-[30px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
      M0,80
      C180,10 300,10 450,80
      C600,110 700,105 850,80
      C1000,55 1080,55 1200,80
      L1200,0
      L0,0
      Z
    "
          fill="#ed2b1c"
        />
      </svg>
    </>
  );
};

export default About;
