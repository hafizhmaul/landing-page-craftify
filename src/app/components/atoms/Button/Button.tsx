import React from "react";

const Button: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`z-10 w-fit bg-[#abf2ff] px-10 py-4 text-2xl font-bold shadow-[10px_10px_0px_0px_#000000] hover:cursor-pointer hover:bg-[#00df9a] hover:text-white hover:transition-all hover:duration-300 tablet:px-5 tablet:py-2 tablet:text-lg `}
    >
      {text}
    </button>
  );
};

export default Button;
