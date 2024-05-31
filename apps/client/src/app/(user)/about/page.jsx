function AboutUs () {

return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h1 className="text-9xl font-bold text-pink-950 sm:text-4xl">Script Squad</h1>
                <p className="mt-4 text-gray-600 text-lg">We are a team of passionate educators and industry experts committed to providing high-quality tech education. Our instructors bring real-world insights and expertise to ensure you stay ahead of the curve.</p>
                <div className="mt-8">
                    <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="./ss.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>

);
}
export default AboutUs