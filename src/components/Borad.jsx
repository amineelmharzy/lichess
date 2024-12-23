function Board() {
    const rows = 8;
    const cols = 8;

    const getSquareColor = (row, col) => {
        return (row + col) % 2 === 0 ? "bg-gray-300" : "bg-gray-700";
    };

    return (
        <div className="w-full max-w-[600px] mx-auto aspect-square grid grid-cols-8 border-1 border-black">
            {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: cols }).map((_, col) => (
                    <div
                        key={`${row}-${col}`}
                        className={`relative flex items-center justify-center ${getSquareColor(
                            row,
                            col
                        )}`}
                    >
                        <span className="absolute left-1 bottom-0 text-xs text-gray-500 font-black select-none">
                            {row == 7 ? String.fromCharCode(65 + col) : ''}
                        </span>
                        <span className="absolute right-1 top-0 text-xs text-gray-500 font-black select-none">
                            {col == 7 ? 8 - row : ''}
                        </span>
                    </div>
                ))
            )}
        </div>
    );
}

export default Board