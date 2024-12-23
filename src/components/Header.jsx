function Header() {
    return (
        <header>
            <nav>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <span className="text-2xl">Lichess.org</span>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-2">
                                    <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300" aria-current="page">Play</a>
                                    <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:text-white">Puzzles</a>
                                    <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:text-white">Learn</a>
                                    <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:text-white">Watch</a>
                                    <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:text-white">Community</a>
                                    <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:text-white">Tools</a>
                                    <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:text-white">Donate</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="relative flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-gray-300">
                                    <path fill-full="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>

                                <input
                                    className="w-full bg-transparent placeholder:text-slate-400 text-gray-200 text-sm rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    placeholder="Search..."
                                />
                            </div>
                            <a href="#" className="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:text-white">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header