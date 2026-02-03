import type { IconType } from "react-icons";
import { useNavigate } from "react-router";

export interface NavitemProps {
  title: string;
  Icon: IconType;
  goTo: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Navitem = ({
  title,
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
      <div className="relative z-10 flex flex-col items-center justify-center py-4 transition-all duration-300">
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