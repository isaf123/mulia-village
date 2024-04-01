"use client";
import * as React from "react";
import Accordion from "@/components/Accordion/Accordion";

interface IFaqProps {}

const Faq: React.FunctionComponent<IFaqProps> = (props) => {
  return (
    <section className="bg-[#E9E9E9] w-full h-[540px] md:h-[2500px] overflow-hidden  ">
      <div className=" w-full h-fit md:h-[213px] ">
        <h1 className=" font-poppins text-color2 text-[20px] md:text-[100px] bg-color1 px-[51px] md:px-[204px] py-[13px] md:py-[32px] font-semibold">
          FAQs
        </h1>
      </div>
      <div className=" mr-0 md:mr-[800px] ">
        <div className="text-[16px] md:text-[60px] text-color1 font-playfair mx-[21px] md:mx-[147px] pt-[18px] md:pt-[114px] ">
          <h1 className=" italic  ">
            Frequently{" "}
            <span className=" font-semibold font-poppins ">
              Asked Questions
            </span>
          </h1>
        </div>
        <div className=" mt-[12px] md:mt-[22px] border-t md:border-t-4 border-color1 mr-[200px] md:mr-[350px]"></div>
      </div>
      <div className="mt-[25px] md:mt-[127px] pl-[15px] md:pl-[204px] mb-[88px] md:mb-[320px] ">
        <Accordion>
          <Accordion.Item title="Lokasi perumahan tepatnya dimana ?">
            <p className="text-[10px] md:text-[30px]">
              Di daerah Sedati, 10 menit dari T2 bandara internasional Juanda.
              Alamat lengkap Jl. Mbah Nanggul, Cemandi, Kec. Sedati, Kabupaten
              Sidoarjo, Jawa Timur 61253
            </p>
          </Accordion.Item>
          <Accordion.Item title="Kisaran Harga Rumah dan Angsuran nya berapa ?">
            <p className=" text-[10px] md:text-[30px]">
              Kisaran Harga 600jutaan / untuk skema kami flexible jadi untuk
              Angsuran biasanya diarahkan untuk Survey dahulu
            </p>
          </Accordion.Item>
          <Accordion.Item title="Apakah Tenor bisa lebih panjang ?">
            <p className=" text-[10px] md:text-[30px]">
              Untuk tenor kami di 60 bulan namun bisa di ajukan
            </p>
          </Accordion.Item>
          <Accordion.Item title="Jalan Alternatif menuju lokasi ?">
            <ul className=" text-[10px] md:text-[30px]">
              <li>
                - Dari arah Surabaya Timur: lewat jalan Meer - Tropodo - Sedati
                - Pulungan
              </li>
              <li>
                - Dari jalur Surabaya - Malang : bisa lewat Aloha - Jl.Raya
                Juanda nanti ambil jalur yang menuju Terminal T2, bisa masuk di
                perumahan Perumdis TNI AL nanti dari jalan masuk bisa melihat
                Google Maps
              </li>
              <li>
                - Dari arah Sidoarjo : bisa lewat Gedangan masuk jalan menuju
                Betro
              </li>
            </ul>
          </Accordion.Item>
          <Accordion.Item title="Bagaimana konsep properti Syariah ?">
            <p className=" text-[10px] md:text-[30px]">
              Konsep peroperti syariah yang kami terapkan adalah konsep
              kepemilikan yang pembayarannya dilakukan langsung kepada pihak
              developer tanpa adanya akad dengan pihak bank. Jadi dalam sistem
              properti syariah setiap transaksi yang berhubungan dengan kredit
              kepemilikian rumah tidak menggunakan jasa keuangan perbankan
              (kecuali hanya sebagai media transfer pembayaran)
            </p>
          </Accordion.Item>
          <Accordion.Item title="Bagaimana jika terjadi gagal bayar ? ">
            <p className=" text-[10px] md:text-[30px]">
              Kami menggunakan prinsip 7T = Tanpa Bank, Tanpa Bunga, Tanpa
              Denda, Tanpa Sita, Tanpa BI Checking, Tanpa Penalti, Tanpa
              Asuransi, Tanpa Akad Bathil. Sehingga jika terjadi gagal bayar
              rumah tidak akan disita, dan akan dimusyawarahkan dahulu untuk
              solusi dari permasalahan pembayarannya.{" "}
            </p>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
