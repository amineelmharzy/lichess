import Board from "./Borad"
import GameEntry from "./GameEntry"

function GameSelect() {
    return (
        <div className="w-full max-w-[600px] mx-auto">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
                <div>
                    <div className="clock">1 + 0</div>
                    <div className="perf">Bullet</div>
                </div>
                <div>
                    <div className="clock">2 + 1</div>
                    <div className="perf">Bullet</div>
                </div>
                <div>
                    <div className="clock">3 + 0</div>
                    <div className="perf">Blitz</div>
                </div>
                <div>
                    <div className="clock">3 + 2</div>
                    <div className="perf">Blitz</div>
                </div>
                <div>
                    <div className="clock">5 + 0</div>
                    <div className="perf">Blitz</div>
                </div>
                <div>
                    <div className="clock">5 + 3</div>
                    <div className="perf">Blitz</div>
                </div>
                <div>
                    <div className="clock">10 + 0</div>
                    <div className="perf">Rapid</div>
                </div>
                <div>
                    <div className="clock">10 + 5</div>
                    <div className="perf">Rapid</div>
                </div>
                <div>
                    <div className="clock">15 + 10</div>
                    <div className="perf">Rapid</div>
                </div>
                <div>
                    <div className="clock">30 + 0</div>
                    <div className="perf">Classical</div>
                </div>
                <div>
                    <div className="clock">30 + 20</div>
                    <div className="perf">Classical</div>
                </div>
                <div>
                    Custom
                </div>
            </div>
        </div >
    )
}

function Game() {
    return (
        <div className="pt-5">
            {/* <GameEntry /> */}
            <GameSelect />
        </div>
    )
}

export default Game