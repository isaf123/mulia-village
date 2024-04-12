import * as React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <section className=" w-full h-fit md:h-[1007px] bg-[#043304] pb-10 md:pb-0">
      <div className=" flex">
        <div className="w-[60px] md:w-[181px] h-[60px] md:h-[181px] ml-[2px] mr-0 md:mx-[72px] my-[10px] md:my-[72px] ">
          <img src="logo-muliavillage.png" alt="" />
        </div>
        <div id="section-2" className=" ml-[20px] md:ml-0">
          <div className="ml-0 md:ml-[92px]  text-white ">
            <div className=" mt-[38px] md:mt-[183px] flex  ">
              <MdLocationOn className="w-[20px] md:w-[50px] h-[20px] md:h-[50px]" />
              <div className=" pl-[10px] space-y-[6px] md:space-y-[19px]">
                <h1 className="text-[10px] md:text-[40px] font-semibold">
                  Find Us :
                </h1>
                <h1 className="text-[8px] md:text-[30px]">
                  Jl. Mbah Nanggul, Cemandi, Kec. Sedati, <br />
                  Kabupaten Sidoarjo, Jawa Timur 61253
                </h1>
              </div>
            </div>
          </div>
          <div className="ml-0 md:ml-[92px]  text-white">
            <div className=" mt-[10px] md:mt-[67px] flex  ">
              <BsFillTelephoneFill className=" w-[10px] md:w-[50px] h-[10px] md:h-[50px]" />
              <div className=" pl-[16px]">
                <h1 className="text-[10px] md:text-[40px] font-semibold">
                  Contact Us :
                </h1>
                <h1 className="text-[8px] md:text-[30px] mt-[6px] md:mt-[19px]">
                  Whatsapp : +62-898-1250-103
                </h1>
                <h1 className="text-[8px] md:text-[30px] mt-[6px] md:mt-[30px]">
                  Office : +62-898-1250-103
                </h1>
              </div>
            </div>
          </div>
          <div className="ml-0 md:ml-[92px]  text-white">
            <div className=" mt-[10px] md:mt-[64px] flex  ">
              <FaClock className="w-[10px] md:w-[50px] h-[10px] md:h-[50px]" />
              <div className=" pl-[16px]">
                <h1 className="text-[10px] md:text-[40px] font-semibold">
                  Operational Hours :
                </h1>
                <h1 className="text-[8px] md:text-[30px] mt-[6px] md:mt-[33px]">
                  Monday - Thursday : 08.00 AM - 17.00 PM
                </h1>
                <h1 className="text-[8px] md:text-[30px]  mt-[6px] md:mt-[33px]">
                  Friday : 08.00 AM - 13.00 PM
                </h1>
                <h1 className="text-[8px] md:text-[30px]  mt-[6px] md:mt-[33px]">
                  Saturday - Sunday : 08.00 AM - 17.00 PM
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section-3"
          className=" text-white ml-[10px] md:ml-[238px]  mr-6 md:mr-0"
        >
          <h1 className=" text-[10px] md:text-[40px] font-semibold mt-[38px] md:mt-[183px] ml-[10px] md:ml-[34px] p-0 md:p-[10px]">
            Our Social Media :
          </h1>
          <div className=" text-white flex mt-[20px] md:mt-[53px] ml-[12px]  md:ml-[34px] ">
            <FaFacebook className=" w-[10px] md:w-[50px] h-[10px] md:h-[50px]" />
            <h1 className="text-[8px] md:text-[30px] ml-[10px] md:ml-[20px] ">
              Mulia Village Juanda
            </h1>
          </div>
          <div className=" text-white flex mt-[10px] md:mt-[53px] ml-[12px]  md:ml-[34px]">
            <FaYoutube className="w-[10px] md:w-[50px] h-[10px] md:h-[47px]" />
            <h1 className="text-[8px] md:text-[30px] ml-[10px] md:ml-[20px]">
              Mulia Village Juanda
            </h1>
          </div>
          <div className=" text-white flex mt-[10px] md:mt-[53px] ml-[12px]  md:ml-[34px]">
            <GrInstagram className="w-[10px] md:w-[50px] h-[10px] md:h-[50px]" />
            <h1 className="text-[8px] md:text-[30px] ml-[10px] md:ml-[20px]">
              @muliavillagejuanda
            </h1>
          </div>
          <div className=" text-white flex mt-[10px] md:mt-[53px] ml-[12px]  md:ml-[34px]">
            <FaTiktok className="w-[10px] md:w-[50px] h-[10px] md:h-[50px]" />
            <h1 className="text-[8px] md:text-[30px] ml-[10px] md:ml-[20px]">
              @muliavillagejuanda
            </h1>
          </div>
          <div className=" hidden md:block mt-[20px]  md:mt-[296px]">
            <p className="text-[#E9E9E9] opacity-[0.65] text-[8px] md:text-[20px]">
              © 2024 Mulia Village juanda. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
