import { useState } from "react";
import Board from "./Borad";

const GameEntry = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabTitles = ["Quick Playing", "Lobby", "Correspondence"];

    const tabContent = [
        <div key="tab2" className="p-4">Content for Tab 1</div>,
        <div key="tab2" className="p-4">Content for Tab 2</div>,
        <div key="tab3" className="p-4">Content for Tab 3</div>
    ];

    return (
        <div className="w-full max-w-[600px] mx-auto">
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
            <div className="mt-4">
                {tabContent[activeTab]}
            </div>
        </div>
    );
};


export default GameEntry