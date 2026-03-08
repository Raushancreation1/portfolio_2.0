
const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Take a look at my professional journey and qualifications.
                    </p>
                </div>

                <div
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-700 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="space-y-4 text-center md:text-left flex-1">
                        <h3 className="text-2xl font-bold text-white">Looking for the full picture?</h3>
                        <p className="text-gray-400">
                            My resume details my educational background, technical skills, and practical experience in full-stack development.
                            I'm currently available for internships and junior developer roles.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                Available Immediately
                            </div>
                            <div className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                Open to Relocation
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div a
                            href="/resume.jpg"
                            download="Raushan_Kumar_Resume.jpg"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/40"
                        >
                            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV
                            <div className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/50 transition-all"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
