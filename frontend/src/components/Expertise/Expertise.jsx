
const Expertise = () => {
    const expertiseItems = [
        {
            title: "Full Stack Development",
            description: "Building scalable web applications from scratch using MERN stack (MongoDB, Express, React, Node.js).",
            icon: "💻"
        },
        {
            title: "Responsive Web Design",
            description: "Creating beautiful, mobile-first interfaces that work seamlessly across all devices and screen sizes.",
            icon: "📱"
        },
        {
            title: "API Development",
            description: "Designing and implementing robust RESTful APIs for secure and efficient data communication.",
            icon: "🔗"
        },
        {
            title: "Database Management",
            description: "Optimizing database schemas and queries for performance and data integrity using MongoDB.",
            icon: "🗄️"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="expertise" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Expertise</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Here are the key areas where I can add value to your projects.
                    </p>
                </div>

                <div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {expertiseItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 group"
                        >
                            <div className="text-4xl mb-6 bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
