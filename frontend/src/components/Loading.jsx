const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
            <div className="relative flex items-center justify-center w-24 h-24 mb-4">
                <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-4 border-t-blue-500 border-r-purple-500 border-b-purple-500 border-l-blue-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        RC
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-widest animate-pulse">
                    LOADING
                </h2>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
