const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-16 relative overflow-hidden">
            {/* Background blobs */}
            <div
                className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            ></div>
            <div
                className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 mutation-delay-2000"
            ></div>
            <div
                className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 mutation-delay-4000"
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div
                    className="space-y-6 text-center md:text-left z-10"
                >
                    <div
                        className="inline-block px-4 py-2 bg-gray-800 rounded-full border border-gray-700"
                    >
                        <span className="text-blue-400 font-semibold text-sm">Available for Work</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        Hi, I'm <span className="text-white">Raushan Kumar</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            Full Stack Developer
                        </span>
                    </h1>
                    <p
                        className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        I specialize in building exceptional digital experiences. Currently, I'm focused on accessible, human-centered products at RaushanCreation.
                    </p>
                    <div
                        className="flex justify-center md:justify-start gap-4 pt-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 font-medium hover:border-blue-500 hover:text-white transition-all transform hover:-translate-y-1 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div
                        className="pt-8 flex items-center justify-center md:justify-start gap-6 text-2xl text-gray-400"
                    >
                        {/* Social placeholders */}
                        <i className="hover:text-white cursor-pointer transition-colors" title="GitHub">GH</i>
                        <i className="hover:text-blue-400 cursor-pointer transition-colors" title="LinkedIn">LI</i>
                        <i className="hover:text-blue-300 cursor-pointer transition-colors" title="Twitter">TW</i>
                    </div>
                </div>

                {/* Image/Visual Content */}
                <div
                    className="relative z-10 flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                        <img
                            src="/profile-circle.png"
                            alt="Raushan Kumar"
                            className="relative w-full h-full object-contain rounded-full border-4 border-gray-800 shadow-2xl animate-float"
                        />
                        {/* Floating Cards */}
                        <div
                            className="absolute top-10 -right-4 bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl border border-gray-700 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            <img src="/icon-lightning.png" alt="Fast" className="w-12 h-12 object-contain" />
                        </div>
                        <div
                            className="absolute bottom-10 -left-4 bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl border border-gray-700 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            <img src="/icon-code.png" alt="Code" className="w-12 h-12 object-contain" />
                        </div>
                        <div
                            className="absolute top-1/2 -right-12 hidden md:block bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl border border-gray-700 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            <img src="/icon-rocket.png" alt="Launch" className="w-12 h-12 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
