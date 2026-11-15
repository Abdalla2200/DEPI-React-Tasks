export default function Services() {
  return (
    <section className="services-home lg:h-185 my-10 py-30 sm:py-16">
      <h2 className="text-white text-[30px] font-medium font-[cursive] mb-20 text-center">
        Don't Hestegate to be in Touch
      </h2>
      <div className="w-[90%] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="h-110 bg-white p-5 rounded-md">
          <img src="img/s1.png" className="w-full h-50 rounded-md mb-2" />
          <h3 className="text-[#57a0a5] text-[20px] mb-2">First Aids</h3>
          <p className="text-[#919090] font-medium text-center leading-normal">
            Providing general safety and first aid supplies. Conducting the
            necessary first aid and referring emergency cases to hospitals when
            necessary.
          </p>
        </div>

        <div className="h-110 bg-white p-5 rounded-md">
          <img src="img/s2.png" className="w-full h-50 rounded-md mb-2" />
          <h3 className="text-[#57a0a5] text-[20px] mb-2">Health education</h3>
          <p className="text-[#919090] font-medium text-center leading-normal">
            Conducting awareness and educational lectures on public health and
            the importance of eating healthy foods.
          </p>
        </div>

        <div className="h-110 bg-white p-5 rounded-md">
          <img src="img/s3.png" className="w-full h-50 rounded-md mb-2" />
          <h3 className="text-[#57a0a5] text-[20px] mb-2">
            Dental Health and Safety
          </h3>
          <p className="text-[#919090] font-medium text-center leading-normal">
            Do a regular dental checkup. Spreading awareness and promoting
            healthy behavior among students of basic grades.
          </p>
        </div>

        <div className="h-110 bg-white p-5 rounded-md">
          <img src="img/s4.png" className="w-full h-50 rounded-md mb-2" />
          <h3 className="text-[#57a0a5] text-[20px] mb-2">Student insurance</h3>
          <p className="text-[#919090] font-medium text-center leading-normal">
            The doctor or nurse handles simple ambulance cases, while the
            student is transferred to the hospital if necessary within the
            coverage program.
          </p>
        </div>
      </div>
    </section>
  );
}
