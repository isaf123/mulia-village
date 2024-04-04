import * as React from "react";
import Inputan from "@/components/inputContact";
import Divider1 from "@/components/Divider1";
import { eventGA } from "@/lib/gtag";
import { IoAlertCircle } from "react-icons/io5";

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  const [activeAlert, setActiveAlert] = React.useState<Boolean>(false);
  const [getData, setGetData] = React.useState<any>({
    name: "",
    email: "",
    wa: "",
    domicile: "",
    type: "",
    plan: "",
  });
  return (
    <section className=" w-full h-fit bg-[#E9E9E9]">
      <Divider1>Contact Us</Divider1>
      <h1 className="mt-[61px] text-[10px] md:text-[30px] px-[30px] md:px-0 text-center text-color1">
        Kontak kami untuk mendapatkan promo, brosur, dan info menarik lainnya.
      </h1>
      <div className=" flex flex-col md:flex-row">
        <form action="" className="">
          <div className=" flex flex-col ml-[15px]  md:ml-[178px] mt-[30px] md:mt-[86px] flex-1">
            <input
              className="w-[358px] md:w-[650px] h-[50px] md:h-[80px] pl-[20px] text-[10px] md:text-[24px] rounded-[10px] border-2 border-color1"
              type="text"
              placeholder="Nama Lengkap"
              onChange={(element: any) => {
                const newData = {
                  ...getData,
                  name: element.target.value,
                };
                setGetData(newData);
              }}
            />
            <input
              className=" mt-[10px] md:mt-[30px] w-[358px] md:w-[650px] h-[50px] md:h-[80px] pl-[20px] text-[10px] md:text-[24px] rounded-[10px] border-2 border-color1"
              type="text"
              placeholder="E-mail"
              onChange={(element: any) => {
                const newData = {
                  ...getData,
                  email: element.target.value,
                };
                setGetData(newData);
              }}
            />
            <input
              className="mt-[10px] md:mt-[30px] w-[358px] md:w-[650px] h-[50px] md:h-[80px] pl-[20px] text-[10px] md:text-[24px] rounded-[10px] border-2 border-color1"
              type="text"
              placeholder="No. Whatsapp"
              onChange={(element: any) => {
                const newData = {
                  ...getData,
                  wa: element.target.value,
                };
                setGetData(newData);
              }}
            />
            <input
              className="mt-[10px] md:mt-[30px] w-[358px] md:w-[650px] h-[50px] md:h-[80px] pl-[20px] text-[10px] md:text-[24px] rounded-[10px] border-2 border-color1"
              type="text"
              placeholder="Kota Domisili"
              onChange={(element: any) => {
                const newData = {
                  ...getData,
                  domicile: element.target.value,
                };
                setGetData(newData);
              }}
            />
            <select
              id="type-rumah"
              name="type-rumah"
              className="mt-[10px] md:mt-[30px] w-[358px] md:w-[650px] h-[50px] md:h-[80px] pl-[20px] text-[10px] md:text-[24px] rounded-[10px] border-2 border-color1"
              //   value={fromStation}
              //   onChange={(e) => setFromStation(e.target.value)}
              onChange={(element: any) => {
                const newData = {
                  ...getData,
                  type: element.target.value,
                };
                setGetData(newData);
              }}
            >
              <option
                value=""
                disabled
                selected
                hidden
                className="text-gray-300"
              >
                Type Rumah
              </option>
              <option value="Gamal">Type Gamal ( 36 / 75 )</option>
              <option value="Ibtisaam">Type Ibtisaam ( 45 / 84 ) </option>
              <option value="Kafeel">Type Kafeel ( 54 / 75 )</option>
              <option value="Mahdiy ">Type Mahdiy ( 60 / 84 )</option>
              <option value="Pahleevi  ">Type Pahleevi ( 90 / 100 ) </option>
            </select>
            <select
              id="rencana-beli"
              name="rencana-beli"
              className="mt-[10px] md:mt-[30px] w-[358px] md:w-[650px] h-[50px] md:h-[80px] pl-[20px] text-[10px] md:text-[24px] rounded-[10px] border-2 border-color1"
              //   value={fromStation}
              //   onChange={(e) => setFromStation(e.target.value)}
              onChange={(element: any) => {
                const newData = {
                  ...getData,
                  plan: element.target.value,
                };
                setGetData(newData);
              }}
            >
              <option value="" disabled selected hidden>
                Rencana Beli
              </option>
              <option value="bulan-depan">Bulan depan</option>
              <option value="belum-tahu">Belum tahu</option>
              <option value="waktu-dekat">Dalam waktu dekat</option>
            </select>

            <div className="w-full h-[16px]  mt-3">
              {activeAlert ? (
                <div className="flex justify-center items-center  gap-2">
                  <IoAlertCircle className="text-red-600 w-[24px] h-[24px]" />
                  <p className="text-lg text-red-600  w-fit font-medium ">
                    Invalid, please fill all data !
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className=" flex justify-center cursor-pointer ">
              <div
                className="flex items-center justify-center mb-0 md:mb-[211px] mt-[40px] md:mt-[28px] w-[280px] md:w-[515px] h-[50px] md:h-[80px] bg-color1 rounded-[10px] md:rounded-[20px] text-[10px] md:text-[30px] text-[#E9E9E9] font-semibold"
                onClick={() => {
                  eventGA({
                    action: "event_contactus_landing",
                    category: "user_contact",
                    label: `${getData.name}, ${getData.wa}`,
                  });
                  {
                    !Object.values(getData).includes("")
                      ? window.open(
                          `https://wa.me/+6289644115873?text=🏠 *Halo Mulia Village!* %0A%0A*Nama*: *${getData.name}*%0A*Email*: *${getData.email}*%0A*Nomor WhatsApp*: *${getData.wa}*%0A*Domisili*: *${getData.domicile}*%0A*Tipe*: *${getData.type}*%0A*Plan*: *${getData.plan}*%0A%0ASelamat mencari rumah impian Anda! Kami siap membantu Anda dalam proses ini. 😊`
                        )
                      : setActiveAlert(true);
                  }

                  {
                    !Object.values(getData).includes("")
                      ? setActiveAlert(false)
                      : setActiveAlert(true);
                  }
                }}
              >
                <p>
                  CONTACT{" "}
                  <span className=" font-normal font-playfair italic">US</span>
                </p>
              </div>
            </div>
          </div>
        </form>
        <div className=" flex flex-1 mt-[20px] md:mt-[86px] mx-[20px] md:ml-[122px]">
          <div className=" mb-6">
            <iframe
              className="rounded-[20px] w-[90vw] h-[60vh] md:w-[650px] md:h-[797px]"
              scrolling="no"
              src="https://maps.google.com/maps?width=650&amp;height=797&amp;hl=en&amp;q=Jl.%20Mbah%20Nanggul,%20Cemandi,%20Kec.%20Sedati,%20Kabupaten%20Sidoarjo,%20Jawa%20Timur%2061253+(Mulia%20Village)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
