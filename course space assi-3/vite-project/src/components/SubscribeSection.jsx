const SubscribeSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#ffaf35] rounded-[40px] py-16 px-6 text-center">
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our News Letter
          </h2>

          <p className="text-gray-800 mb-10">
            Subscribe to our newsletter to get information about our courses.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full sm:w-[400px] px-6 py-3 rounded-xl bg-white"
            />

            <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-xl transition duration-300">
              Subscribe
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default SubscribeSection;