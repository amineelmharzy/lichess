import { useState } from "react";
import Board from "./Borad";
import ModeSelect from "./ModeSelect";
import './Playground.css'
import Lobby from "./Lobby";

const Playground = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabTitles = ["Quick Playing", "Lobby", "Correspondence"];

    const tabContent = [
        <ModeSelect />,
        <Lobby />,
    ];

    return (
        <div className="playground w-full max-w-[600px] mx-auto mt-5">
            <div className="flex space-x-20 justify-center">
                {tabTitles.map((title, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 text-sm font-light transition-colors duration-200 ${activeTab === index
                            ? "text-orange-600 border-b-2 border-orange-600"
                            : "text-gray-400 hover:text-gray-300"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {title}
                    </button>
                ))}
            </div>
            <div className="playground-content mt-4">
                {tabContent[activeTab]}
            </div>
        </div>
    );
};


export default Playground