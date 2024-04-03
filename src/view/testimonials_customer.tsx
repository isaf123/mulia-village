import Divider1 from "@/components/Divider1";
import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ICustomer {
  id: number;
  image: string;
  name: string;
  job: string;
  testimony1a: string;
  testimony1b: string;
}

interface ITestimonialsCustomerProps {}

const TestimonialsCustomer: React.FunctionComponent<
  ITestimonialsCustomerProps
> = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const keywordsGreen = [" skema ", "Lokasi ", "legalitas ", " Fasilitas "];
  const keywordsYellow = ["syariah ", "strategis ", "lengkap ", "lengkap "];
  const customers: ICustomer[] = [
    {
      id: 1,
      image: "customer1.jpg",
      name: "Bp. Mujiburrahman",
      job: "Pendiri Rumah Tahfidz Athfaaluna",
      testimony1a:
        "Saya tertarik dengan skema syariahnya, wajib di kembangkan ke jual beli rumah, Karena rumah adalah kegiatan pertama pendidikan untuk anak. Kalau belinya dengan",
      testimony1b: " insyAllah penuh keberkahan penghuni di dalamnya.",
    },
    {
      id: 2,
      image: "customer2.jpg",
      name: "Dr. Erni",
      job: "Dokter",
      testimony1a: "",
      testimony1b:
        "dibanding project yang lain di sekitar Sedati. Saya beli buat invest ya intinya mempersiapkan buat anak saya nantinya.",
    },
    {
      id: 3,
      image: "customer3.jpg",
      name: "Aprilia Pretyany",
      job: "Karyawan Angkasa Pura",
      testimony1a:
        "Lokasinya sangat dekat dengan tempat kerja saya dan progress pembangunannya terlihat jelas menjadi perumahan yang terurut, dengan ",
      testimony1b:
        "Developer-nya pun transparan. Saya sangat senang dengan pilihan saya ini.",
    },
    {
      id: 4,
      image: "customer4.jpg",
      name: "Adhi Utama",
      job: "Specialist IT",
      testimony1a: "Tertarik ambil karena",
      testimony1b:
        "ada rumah tahfidz saya seneng banget. Anak yang cowok kebetulan juga saya ikutkan kelas di rumah tahfidz athfaaluna sudah beberapa juz hafalannya. Jadi bisa dilanjutkan lagi di rumah tahfidz Mulia Village Juanda nantinya.",
    },
  ];

  return (
    <div className="w-[390px] md:w-full">
      <Divider1>Testimonials from</Divider1>
      <div className="text-7xl flex align-middle items-center mb-10">
        <div
          id="line"
          className="w-[112px] md:w-[861px] h-[2px] md:h-[6px] bg-color1"
        />
        <h1 className="font-poppins font-bold text-color1 text-center text-xl md:text-7xl">
          our
        </h1>
        <h1 className="font-playfair text-color2 text-center italic text-xl md:text-7xl">
          customers
        </h1>
      </div>
      {/* Carousel image */}
      <div className="bg-white hidden md:flex mx-[10rem] mt-[100px] mb-[188px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          className="flex w-full"
        >
          {customers.map((customer: ICustomer, idx) => (
            <div key={customer.id}>
              <div className={`h-[852px] flex rounded-lg shadow-xl`}>
                <img
                  src={customer.image}
                  className="w-1/3 rounded-l-lg object-cover"
                />
                <div
                  id="right-container"
                  className="flex flex-col relative text-color1 justify-center items-center rounded-r-lg bg-white px-[150px] text-justify"
                >
                  <img
                    src="logo-muliavillage.png"
                    alt=""
                    className="size-[7rem] absolute right-10 top-10"
                  />
                  <div id="testimony">
                    <p className="text-4xl mb-[70px]">
                      <b className="text-5xl">&ldquo;</b>
                      {customer.testimony1a}
                      <span className="font-bold text-5xl">
                        {keywordsGreen[idx]}
                      </span>
                      <span className="font-bold text-color2  text-5xl font-playfair italic">
                        {keywordsYellow[idx]}
                      </span>
                      {customer.testimony1b}
                      <b className="text-5xl">&ldquo;</b>
                    </p>
                  </div>
                  <div className="w-[5rem] h-[3px] bg-color1 mb-10" />
                  <h1 className="text-4xl font-bold pt-2">{customer.name}</h1>
                  <h1 className="text-4xl font-bold pt-2">{customer.job}</h1>
                  <div className="absolute bottom-0 w-full bg-color1 h-[94px] rounded-br-lg">
                    <p className="text-white absolute right-28 top-1/3 text-xl">
                      Mulia Village juanda
                    </p>
                    <div className="w-[20rem] border-b-2 border-white absolute right-0 bottom-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* mobile version */}
      <div className="flex flex-col justify-center items-center space-y-8 md:hidden">
        <img src="Frame1.png" alt="testi1" className="w-[273px]" />
        <img src="Frame2.png" alt="testi2" className="w-[273px]" />
        <img src="Frame3.png" alt="testi3" className="w-[273px]" />
        <img src="Frame4.png" alt="testi4" className="w-[273px]" />
      </div>
    </div>
  );
};

export default TestimonialsCustomer;
