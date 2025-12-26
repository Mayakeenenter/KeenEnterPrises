import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DrawingArrow = () => {
  const [isMobile, setIsMobile] = useState(false);

 
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 992);
    checkSize(); 
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.5, duration: 2, ease: "easeInOut" },
        opacity: { delay: 0.5, duration: 0.5 },
      },
    },
  };


  const desktopPath = "M30,5 C50,10 20,80 150,80 C250,80 230,120 280,130";
  const desktopHead = "M270,120 L280,130 L265,140";

 
  const mobilePath = "M150,10 C150,10 160,50 150,80 C140,110 150,130 150,160";
  const mobileHead = "M135,145 L150,160 L165,145";

  return (
    <div style={{ width: "50%", textAlign: "center" }}>
      <motion.svg
        width= {isMobile ? "100%" : '50%' }
        height={isMobile ? "200" : "180"} 
        viewBox={isMobile ? "0 0 300 200" : "0 0 300 150"}
        initial="hidden"
        animate="visible"
       
      >
        {/* جسم السهم */}
        <motion.path
          d={isMobile ? mobilePath : desktopPath}
          stroke="#fcb900"
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          variants={draw}
          animate={{ d: isMobile ? mobilePath : desktopPath 
            ,  y: [0, 5, 0]
          }} 
            transition={{ 
            y: { repeat: Infinity, duration: 1, delay: 2.5 } 
          }}
        />

        {/* رأس السهم */}
        <motion.path
          d={isMobile ? mobileHead : desktopHead}
          stroke="#fcb900"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          variants={draw}
          animate={{ 
            d: isMobile ? mobileHead : desktopHead,
            y: [0, 5, 0]
          }}
          transition={{ 
            y: { repeat: Infinity, duration: 1, delay: 2.5 } 
          }}
        />
      </motion.svg>
    </div>
  );
};

export default DrawingArrow;

