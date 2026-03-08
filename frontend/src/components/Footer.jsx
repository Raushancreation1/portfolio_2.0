const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Raushan Kumar. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
