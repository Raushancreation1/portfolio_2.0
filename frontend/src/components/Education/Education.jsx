
const Education = () => {
    const education = [
        {
            id: 1,
            institution: "Jagannath University",
            degree: "Bachelor of Computer Applications (BCA)",
            duration: "2023 - Present",
            status: "Final Year",
            description: "Focusing on advanced computing concepts, software development, and web technologies. Participating in coding clubs and hackathons.",
            icon: "🎓"
        },
        // Add more if needed, for instance, high school
    ];

    return (
        <section id="education" className="py-20 bg-gray-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {education.map((edu, index) => (
                        <div key={edu.id} className="relative pl-8 md:pl-0">
                            {/* Timeline line */}
                            <div
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"
                            ></div>

                            <div
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="hidden md:block w-5/12"></div>

                                {/* Center Point */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30 z-10">
                                    <span className="text-sm">{edu.icon}</span>
                                </div>

                                <div
                                    className="w-full md:w-5/12"
                                >
                                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl group">
                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
                                            {edu.duration}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                                        <h4 className="text-lg text-purple-400 mb-2">{edu.degree}</h4>
                                        <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
                                        <div className="flex items-center text-sm font-medium text-green-400">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                            {edu.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Education;
