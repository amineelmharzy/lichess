import React from "react";

const ModeSelect = () => {
  const gameModes = [
    { clock: "1 + 0", perf: "Bullet" },
    { clock: "2 + 1", perf: "Bullet" },
    { clock: "3 + 0", perf: "Blitz" },
    { clock: "3 + 2", perf: "Blitz" },
    { clock: "5 + 0", perf: "Blitz" },
    { clock: "5 + 3", perf: "Blitz" },
    { clock: "10 + 0", perf: "Rapid" },
    { clock: "10 + 5", perf: "Rapid" },
    { clock: "15 + 10", perf: "Rapid" },
    { clock: "30 + 0", perf: "Classical" },
    { clock: "30 + 20", perf: "Classical" },
    { clock: "Custom", perf: null },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {gameModes.map((mode, index) => (
          <div
            key={index}
            className="p-4 bg-zinc-800 bg-opacity-50 rounded-lg shadow-lg hover:bg-orange-600 hover:bg-opacity-15 transition duration-300 text-center text-white min-h-36 flex flex-col justify-center"
          >
            {mode.perf ? (
              <>
                <div className="text-3xl text-gray-300">{mode.clock}</div>
                <div className="text-md text-gray-400">{mode.perf}</div>
              </>
            ) : (
              <div className="text-2xl text-gray-300">Custom</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModeSelect;
