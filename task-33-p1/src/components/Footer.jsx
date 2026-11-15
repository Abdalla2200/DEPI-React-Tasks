export default function Footer() {
  return (
    <footer className="bg-[#0f7b65] rounded-[150px_150px_0px_0px] py-10">
      <div className="w-[98%] md:w-[85%] mx-auto grid gap-10 grid-cols-6">
        <div className="col-span-6 md:col-span-3 text-white text-center mt-8">
          <h3 className="text-[30px] mb-6">Madrasty</h3>
          <p className="text-lg leading-[1.6]">
            The Best collection of international schools For All Student In All
            different Ages From six years to 15 years
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 text-center lg:text-start">
          <h4 className="text-[#f48e76] mb-7 font-medium text-[28px]">
            Student
          </h4>
          <span className="block text-white mb-5 font-medium">Result</span>
          <span className="block text-white mb-5 font-medium">Exams</span>
          <span className="block text-white mb-5 font-medium">Quizes</span>
          <span className="block text-white mb-5 font-medium">Courses</span>
        </div>

        <div className="col-span-2 md:col-span-1 text-center lg:text-start">
          <h4 className="text-[#f48e76] mb-7 font-medium text-[28px]">News</h4>
          <span className="block text-white mb-5 font-medium">Uniform</span>
          <span className="block text-white mb-5 font-medium">chapion</span>
          <span className="block text-white mb-5 font-medium">Tables</span>
        </div>

        <div className="col-span-2 md:col-span-1 text-center lg:text-start">
          <h4 className="text-[#f48e76] mb-7 font-medium text-[28px]">
            Contact
          </h4>
          <span className="block text-white mb-5 font-medium">2033500394</span>
          <span className="block text-white mb-5 font-medium">
            Or32@Yahoo.com
          </span>
        </div>
      </div>
    </footer>
  );
}
