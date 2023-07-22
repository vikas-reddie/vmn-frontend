import vmn from "../../assets/VMN logo.png";
import Data from "../../data/Data";
import map from "../../assets/maps.png"
import Slider from "../../components/Slider"
import Codex from "../../assets/codexpng.png"
import Image from "next/image";

const AboutUs = () =>{

    return(

      <div className='flex flex-col font-sans  mt-[100px] sp:mt-22'>
          <div className=''>
              <div className='flex flex-col pl-5 sm:pl-0  sn: ml-0 sn:pl-0 sp:pl-0 se:pl-0  '>
                  <h1 className='text-[#262626]  text-2xl sp:text-[25px] se:text-[25px] si:text-[30px] sr:text-[32px] sn:text-[18px] font-bold uppercase  flex justify-center'>
                  We’re here to
                  </h1>
                  <h1 className='text-[#492DD8]  text-2xl sp:text-[20px] se:text-[25px] si:text-[30px] sr:text-[32px] sn:text-[18px] font-bold uppercase  flex justify-center'>
                  gurantee your success
                  </h1>
                  <div className='flex justify-center'>
                    <div className='w-[200px] md:w-[320px] sp:w-[300px] se:w-[320px] si:w-[440px] sr:w-[470px] sn:w-[240px]  h-[3px] bg-[#FB8122] rounded-md'></div>
                  </div>
              </div>
              <div className=" flex  justify-center mt-[45px] sp:mt-[40px]">
                <div className="bg-[#3A256D] p-4 w-[600px] h-[200px] sp:w-[300px] sp:h-[340px] se:w-[330px] se:h-[320px] si:h-[320px] sr:h-[320px]  sn:w-[210px] sn:h-[450px] rounded-lg">
                  <p className="text-white si:text-xl sr:text-2xl sn:text-[15px]">Venture Development Center (VDC) is a venture pre-incubator and the epicenter for all the startup action at GITAM. The centre is an abode for various entrepreneurship activities on campus with a dedicated team of venture coaches, trained & certified by Northeastern University, Boston, and a wholly student-run E-Club. </p>
                  <Image width={600} height={200} className='object-contain w-[600px] h-[200px] rounded-lg ' src='https://color-hex.org/colors/e1e2e2.png' alt='VDC-VMN' />
                </div>
              </div>
              <div className=' flex flex-col pl-5 mt-[155px] sp:mt-[120px] sn:mt-[100px]'>
                  <h1 className='text-[#262626]  text-2xl sp:text-[25px] sr:text-[32px] se:text-[25px] si:text-[30px] sn:text-[16px] font-bold uppercase  flex justify-center'>
                  We’re here for you
                  </h1>
                  <h1 className='text-[#492DD8]  text-2xl sp:text-[20px] se:text-[22px] si:text-[30px] sr:text-[32px] sn:text-[16px] font-bold uppercase  flex justify-center'>
                  no matter where you are
                  </h1>
                  <div className='flex justify-center'>
                    <div className='w-[200px] md:w-[350px] sp:w-[300px] se:w-[320px] si:w-[440px] sr:w-[470px] sn:w-[240px]  h-[3px] bg-[#FB8122] rounded-md'></div>
                  </div>
                  <div className="flex justify-center mt-5 relative">
                    <Image className="w-[800px] h-auto sp:w-[1000px] sp:h-[300px] se:w-[1000px] se:h-[300px] sr:h-[600px] sn:w-[950px] sn:h-[200px] rounded-lg" src={map} alt="VDC-VMN" />
                  </div>


                </div>
              <div className="flex  flex-col  justify-center items-center gap-7">
                <div className="mx-0 w-[80vw] flex flex-col space-y-10 ">
                  <div className="">
                  <h1 className=" text-2xl font-bold">
                    <span className="text-black sp:text-xl se:text-[24px] si:text-[32px]  sr:text-[34px] sn:text-[20px]">Our</span>{"  "}
                    <span className="text-[#492DD8] sp:text-xl se:text-[24px] si:text-[32px] sr:text-[34px] sn:text-[20px]">Mission</span>
                  </h1>
                  <div className='w-[120px] md:w-[50%] h-[3px] bg-[#FB8122] se:w-[140px] rounded-md'></div>
                </div>
                  <div className="flex flex-col space-y-10">
                  <div className="flex flex-row gap-12 ">
                  <div className=" ">
                    <h2 className="text-xl  sp:text-[15px] se:text-[17px] si:text-[25px] sr:text-[27px] sn:text-[18px] font-bold">Mentorship</h2>
                  </div>
                  <div className="">
                    <div className=" text-[#5D5F61]  sp:text-[14px] si:w-[450px] si:text-[22px]  sr:text-[25px]  sn:text-[16px]">
                       <p>Providing experienced mentors who can offer guidance, advice, and expertise to entrepreneurs.</p>
                    </div>
                  </div>
                  </div>
                  <div className="flex flex-row gap-12 ">
                  <div className=" ">
                    <h2 className="text-xl  sp:text-[15px] se:text-[17px] si:text-[25px] sr:text-[27px] sn:text-[18px] font-bold">Networking</h2>
                  </div>
                  <div className="">
                    <div className="content text-[#5D5F61]  sp:text-[14px] si:text-[22px]  sr:text-[25px]  sn:text-[16px]">
                       <p>Facilitating connections and networking opportunities between entrepreneurs, mentors, industry experts, and potential investors. This helps entrepreneurs expand their professional network and gain access to valuable resources. </p>
                    </div>
                  </div>
                  </div>
                  <div className="flex flex-row gap-12 ">
                  <div className=" ">
                    <h2 className="text-xl  sp:text-[15px] se:text-[17px] si:text-[25px] sr:text-[27px] sn:text-[18px] font-bold">Knowledge sharing</h2>
                  </div>
                  <div className="">
                    <div className="content text-[#5D5F61]  sp:text-[14px]   si:text-[22px]  sr:text-[25px]  sn:text-[16px]">
                       <p>Sharing industry insights, best practices, and practical knowledge to help entrepreneurs navigate the challenges of building and growing a startup. This can involve workshops, seminars, panel discussions, and educational resources. </p>
                    </div>
                  </div>
                  </div>
                  <div className="flex flex-row sp:gap-10 ">
                  <div className=" ">
                    <h2 className="text-xl  sp:text-[15px] se:text-[17px] si:text-[25px] sr:text-[27px] sn:text-[18px] font-bold">Community building</h2>
                  </div>
                  <div className="">
                    <div className="content text-[#5D5F61]  sp:text-[14px] se:w-[260px] si:w-[450px] si:text-[22px] sr:w-[500px] sr:text-[25px] sn:w-[200px] sn:text-[16px]">
                       <p>Creating a supportive and collaborative community of entrepreneurs where they can learn from each other, share experiences, and find opportunities for collaboration.</p>
                    </div>
                  </div>
                  </div>
              </div>
                  </div>
                  <div className=" mx-0 w-[80vw] flex flex-col space-y-10 ">
                  <div className="flex  flex-col ">
                  <h1 className=" text-2xl font-bold">
                    <span className="text-black sp:text-[20px] se:text-[24px] si:text-[32px]  sr:text-[34px] sn:text-[20px]">Our</span>{"  "}
                    <span className="text-[#492DD8] sp:text-[20px] se:text-[24px] si:text-[32px] sr:text-[34px] sn:text-[20px]">Commitment</span>
                  </h1>
                  <div className='w-[120px] md:w-[50%] h-[3px] bg-[#FB8122] se:w-[140px] rounded-md'></div>
                </div>
                  <div className="flex flex-col space-y-5">
                  <div className="flex flex-row gap-12 ">
                  <div className=" ">
                    <h2 className="text-xl  sp:text-[15px] se:text-[17px] si:text-[25px] sr:text-[27px] sn:text-[18px] font-bold">Time Commitment</h2>
                  </div>
                  <div className="">
                    <div className="content text-[#5D5F61]  sp:text-[14px]   si:text-[22px] sr:text-[25px]  sn:text-[16px]">
                       <p>Both entrepreneurs and mentors are typically expected to commit a certain amount of time to the program. This could involve regular meetings or check-ins, attending workshops or events, and actively engaging with the network.</p>
                    </div>
                  </div>
                  </div>
                  <div className="flex flex-row gap-12 ">
                  <div className=" ">
                    <h2 className="text-xl  sp:text-[15px] se:text-[17px] si:text-[25px] sr:text-[27px] sn:text-[18px] font-bold">Active Participation</h2>
                  </div>
                  <div className="">
                    <div className="content text-[#5D5F61]  sp:text-[14px]  si:text-[22px]  sr:text-[25px]  sn:text-[16px]">
                       <p>Active participation is crucial for the success of the mentorship program. Entrepreneurs should actively seek guidance, ask questions, and be open to feedback from their mentors. Mentors should actively engage with their mentees, provide guidance, and share their expertise.</p>
                    </div>
                  </div>
                  </div>
                  <div className="flex flex-row gap-9 ">
                  <div className=" ">
                    <h2 className="text-xl  sp:text-[15px] se:text-[17px] si:text-[25px] sr:text-[27px] sn:text-[18px] font-bold">Accountability</h2>
                  </div>
                  <div className="">
                    <div className="content text-[#5D5F61]  sp:text-[14px]  si:text-[22px]  sr:text-[25px]  sn:text-[16px]">
                       <p>Entrepreneurs should be accountable for their progress and goals. They should demonstrate a willingness to implement advice and recommendations provided by their mentors. Mentors should be accountable for their commitment to support and guide entrepreneurs effectively</p>
                    </div>
                  </div>
                  </div>
              </div>
                  </div>
                  
              </div>
              
              <div className='flex flex-col pl-5 sm:pl-0 ml-[50px] sn:ml-[0px] sn:pl-0 sp:pl-0 se:pl-0 sp:mt-5 si:mt-9 sn:mt-5'>
                  <h1 className='text-[#492DD8]  text-2xl  sp:text-[20px]  sn:text-[18px] font-bold uppercase  flex justify-center'>
                  OUR SUCCESS STORIES
                  </h1>
              </div>
              <div className="my-5">
              <Slider/>
              </div>
              <div className="bg-[#3A256D] p-4 w-full   ">
              <div className="flex flex-wrap  ">
                <div className="w-full sm:w-1/3 mt-10 sp:pl-20 se:pl-20 sn:pl-20 sp:mt-3 se:mt-2 sn:mt-1">
                  <h1 className="mb-1 font-bold text-white text-3xl sp:text-[20px] se:text-[20px] si:text-[22px] sr:text-[22px] sn:text-[16px] ">Our Contact Details</h1>
                  <p className="text-white text-l sr:text-[18px] sn:text-[16px]">Let’s connect.</p>
                </div>
                <div className="w-full sm:w-1/3 sp:pl-20 se:pl-20 sn:pl-20 ">
                  <div className="mb-10 mt-6">
                  <h1 className="mb-1 font-bold text-white sr:text-[24px] sn:text-[15px]">Telephone</h1>
                  <p className="text-white sr:text-[18px] sn:text-[12px]">+91 1111111111.</p>
                </div>
                <div>
                  <h1 className="mb-1 font-bold text-white sr:text-[24px] sn:text-[15px]">WhatsApp</h1>
                  <p className="text-white sr:text-[18px] sn:text-[12px]">+91 1111111111.</p>
                </div>
                </div>
                <div className="w-full sm:w-1/3 sp:pl-20 se:pl-20 sn:pl-20">
                <div className="mb-10 mt-6">
                  <h1 className="mb-1 font-bold text-white sr:text-[24px] sn:text-[15px]">Office</h1>
                  <p className="text-white sr:text-[18px] sn:text-[12px]">Gitam university</p>
                </div>
                <div>
                  <h1 className="mb-1 font-bold text-white sr:text-[24px] sn:text-[15px]">Email</h1>
                  <p className="text-white sr:text-[18px] sn:text-[12px]">vdc.gitam.edu.</p>
                </div>
                </div>
              </div>
              <div className="flex flex-row justify-between my-5">
              <Image src={vmn}  alt="Image" className=" w-auto lg:h-[65px] h-[50px]"/>
              <Image src={Codex}  alt="Image" className=" w-auto lg:h-[65px] h-[50px]" />
              </div>
           </div>
         </div>
      </div>
    )
}
export default AboutUs;