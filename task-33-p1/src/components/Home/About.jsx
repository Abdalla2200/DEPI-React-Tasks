export default function About() {
  return (
    <main className="my-10">
      <h2 className="text-[#164d4c] mb-5 font-[cursive] text-center text-[32px] font-medium">
        School clinic
      </h2>
      <hr className="h-1.5 border-none w-55 mx-auto mb-12 bg-[#e98317]" />
      <div className="w-[85%] mx-auto grid gap-10 items-center md:grid-cols-2">
        <img src="img/compo.png" />
        <div className="font-[cursive] text-center md:text-start">
          <h3 className="text-[#57a0a5] mb-3 text-[28px] font-medium">
            The school clinic services
          </h3>
          <p className="text-[#484a4c] text-lg leading-normal">
            Conducting periodic checks for students. Implementing vaccination
            programs to prevent diseases, according to the instructions of the
            Ministry of Health. Follow-up of sick cases and contact with parents
            to attend if the case requires. Providing a healthy environment in
            the school community.
          </p>
        </div>
      </div>
    </main>
  );
}
