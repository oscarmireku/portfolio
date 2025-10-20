import HeroImg from "@/assets/images/profile.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-20  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-8">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Network Administrator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-20">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Oscar Mireku, a passionate IT professional specializing in network administration,
                 cloud computing, and enterprise infrastructure solutions. As the top graduate from NBCC’s IT 
                 Network Administration program, I bring both academic excellence and hands-on expertise in 
                 <span className="font-bold text-white"> Microsoft
                  365, Azure, AWS, Windows Server, and Cisco-based networking environments.</span>{" "}
          
              </p>
              <p className="text-white">
                I enjoy designing and deploying secure and efficient IT environments that support business needs. 
                From implementing group policies and managing Exchange Online to configuring routing protocols like 
                OSPF and setting up scalable Azure infrastructures, I take pride in delivering reliable, well-documented, 
                and future-ready solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Outside of work, I enjoy music, labbing new technologies, and driving—activities that fuel both my creativity and technical curiosity. Whether I'm setting up a high-availability domain controller or helping seniors troubleshoot devices, I'm driven by a commitment to continuous learning and real-world problem solving.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Oscar Mireku
                    </cite>
                    
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}