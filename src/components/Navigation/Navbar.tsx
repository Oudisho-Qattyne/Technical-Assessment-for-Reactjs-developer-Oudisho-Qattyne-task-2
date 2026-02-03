import type { NavitemProps } from "./Navitem";
import Navitem from "./Navitem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export interface NavbarProps {
  navitems: NavitemProps[];
}

const Navbar = ({ navitems }: NavbarProps) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevActiveIndex, setPrevActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    const index = navitems.findIndex(item => {
      return  path.split("/").pop() === item.goTo;
    });
    
    if (index !== -1 && index !== activeIndex) {
    setPrevActiveIndex(activeIndex);
    setActiveIndex(index);
      setIsAnimating(true);

      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  }, [location.pathname, navitems]);

  const getAnimationClass = () => {
    const direction = activeIndex > prevActiveIndex ? "right" : "left";
    return `slide-${direction}`;
  };

  // Calculate background position (percentage)
  const backgroundPosition = (100 / navitems.length) * activeIndex;

  return (
    <div className="relative bg-white w-full h-20 flex flex-row items-center px-1 border-t border-t-secondary bottom-0">
      <div 
        className={`absolute h-12 rounded-full transition-all duration-500 ease-in-out bg-linear-to-tr from-[#FF4D00] to-[#FF00D6] ${isAnimating ? getAnimationClass() : ''}`}
        style={{
          width: `${100 / navitems.length}%`,
          left: `${backgroundPosition}%`,
        }}
      />
      
      {navitems.map((navitem, index) => (
        <Navitem 
          key={index}
          {...navitem}
          isActive={index === activeIndex}
          onClick={() => {
            if (index !== activeIndex) {
              setPrevActiveIndex(activeIndex);
              setActiveIndex(index);
              setIsAnimating(true);
              setTimeout(() => setIsAnimating(false), 500);
            }
          }}
        />
      ))}
    </div>
  );
};

export default Navbar;