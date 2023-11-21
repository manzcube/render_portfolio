import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bottom-0 flex flex-col md:flex-row  justify-between items-center py-2 px-8 md:px-24 text-xs text-sky-200 bg-sky-800">
      <p className="flex items-center py-5">© mancube copyright </p>
      <div className="flex">
        <div>
          <a
            href="https://www.flaticon.com/free-icons/rubik"
            title="Rubik icons"
          >
            Rubik icons created by Freepik - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/maze" title="maze icons">
            Maze icons created by Freepik - Flaticon
          </a>
        </div>
        <div>
          <a href="https://www.flaticon.com/free-icons/goal" title="goal icons">
            Goal icons created by herikus - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/efficiency"
            title="efficiency icons"
          >
            Efficiency icons created by srip - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/brain"
            title="brain icons"
          >
            Brain icons created by Smashicons - Flaticon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
