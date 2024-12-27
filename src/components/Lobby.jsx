function Lobby() {
    const dummyData = [
        { username: 'alex', time: '5+0', mode: 'blitz' },
        { username: 'john', time: '3+2', mode: 'bullet' },
        { username: 'mike', time: '10+5', mode: 'rapid' },
        { username: 'sarah', time: '1+0', mode: 'bullet' },
        { username: 'james', time: '15+10', mode: 'rapid' },
        { username: 'lily', time: '30+0', mode: 'classical' },
        { username: 'emily', time: '3+0', mode: 'blitz' },
        { username: 'mark', time: '10+0', mode: 'rapid' },
        { username: 'david', time: '5+3', mode: 'blitz' },
        { username: 'susan', time: '30+20', mode: 'classical' }
    ];

    return (
        <div className="w-full max-w-[600px] mx-auto">
            <div className="h-[588px] bg-zinc-800 bg-opacity-60">
                <div
                    className="flex items-center justify-between p-3 text-gray-300 hover:bg-orange-600 hover:bg-opacity-20 cursor-pointer transition duration-300 border-b border-b-gray-400 border-opacity-40"
                >
                    <div className="text-sm text-gray-400 flex-grow font-medium">Rating</div>
                    <div className="text-sm text-gray-400 flex justify-center font-medium">Time</div>
                    <div className="text-sm px-5 text-gray-400 flex justify-center font-medium">Mode</div>
                </div>
                {dummyData.map((player, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 text-gray-300 hover:bg-orange-600 hover:bg-opacity-20 cursor-pointer transition duration-300 border-b border-b-gray-400 border-opacity-40"
                    >
                        <div className="text-md font-light flex-grow">{player.username}</div>
                        <div className="text-sm text-gray-400 flex justify-center w-1/3">{player.time}</div>
                        <div className="text-xs px-3 py-1 flex justify-center w-1/4">
                            {player.mode}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lobby