import type { IconType } from "react-icons";
import { useNavigate } from "react-router";

export interface NavitemProps {
  Icon: IconType;
  goTo: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Navitem = ({
  Icon,
  goTo,
  isActive = false,
  onClick,
}: NavitemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(goTo);
  };

  return (
    <div 
      className="relative w-1/5 flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <div className={`relative w-full z-10 flex flex-col items-center justify-center p-4 transition-all duration-300 ${  !isActive && `hover:bg-secondary rounded-full focus:ring-offset-primary`}`}>
        <Icon 
          className={`text-2xl transition-colors duration-300 ${
            isActive ? "text-white" : "text-black"
          }`}
        />

       
      </div>
    </div>
  );
};

export default Navitem;