"use client";
import * as React from "react";
import Card1 from "@/components/Card1";
import { GrDocumentText } from "react-icons/gr";
import { TfiMapAlt } from "react-icons/tfi";
import { PiRoadHorizon } from "react-icons/pi";
import { RiLeafFill } from "react-icons/ri";
import { FaWater } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import Divider1 from "@/components/Divider1";
interface ILegalitasTerjaminProps {}

const LegalitasTerjamin: React.FunctionComponent<ILegalitasTerjaminProps> = (
  props
) => {
  return (
    <div className=" mt-[77px] md:mt-[118px] mb-12 md:mb-[7rem] w-[390px] md:w-full">
      <div>
        <Divider1>Legalitas Terjamin</Divider1>
      </div>
      <p className="text-color1 text-center text-xs md:text-2xl mt-5 mb-12 md:mt-0 md:mb-0 md:py-[7rem] px-5 md:px-0">
        Kami sangat memahami keinginan customer mengenai legalitas. Jangan
        khawatir dengan Mulia <br /> Village Juanda, kami sudah melengkapi
        hunian kami dengan semua perizinan hingga IMB. Sehingga <br />
        anda hanya perlu beli dan tinggal.
      </p>
      <div className="gap-3 md:gap-x-8 md:gap-y-36  grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 mx-5 md:mx-[5rem] justify-center items-center">
        <Card1
          title="Izin Pertimbangan Teknis Pertanahan - BPN"
          number="Nomor : 97/9.35.15/V/2019"
          date="Tanggal Terbit : 23 Mei 2019"
        >
          <GrDocumentText />
        </Card1>
        <Card1
          title="Izin Lokasi - Dinas Penanaman Modal & Pelayanan Terpadu Satu Pintu"
          number="Nomor : 503/275/438.5.16/2019"
          date="Tanggal Terbit : 05 Agustus 2019"
        >
          <TfiMapAlt />
        </Card1>
        <Card1
          title="Izin Andalalin (Analisis Dampak Lalu Lintas) - Dinas Perhubungan"
          number="Nomor : 188/859/438.1.1.3/2019"
          date="Tanggal Terbit : 12 Desember 2019"
        >
          <PiRoadHorizon />
        </Card1>

        <Card1
          title="Izin UKL-UPL - Dinas Lingkungan Hidup & Kebersihan"
          number="Nomor : 660/0556/438.5.3/2020"
          date="Tanggal Terbit : 25 Februari 2020"
        >
          <RiLeafFill />
        </Card1>
        <Card1
          title="Izin Peil Banjir - Dinas Pekerjaan Umum Bina Marga & Sumber Daya Air"
          number="Nomor : 610/0353/438.5.3/2020"
          date="Tanggal Terbit : 12 Maret 2020"
        >
          <FaWater />
        </Card1>
        <Card1
          title="Izin Teknis Sistem Drainase - Dinas Perumahan Permukiman Cipta Karya & Tata Ruang"
          number="Nomor : 188/1030/438.5.4/2020"
          date="Tanggal Terbit : 08 Juni 2020"
        >
          <FaWater />
        </Card1>

        <Card1
          title="Izin Pemakaian Kekayaan Daerah - Dinas Pekerjaan Umum Bina Marga & Sumber Daya Air"
          number="Nomor : 610/0355/438.5.3/2020"
          date="Tanggal Terbit : 12 Maret 2020"
        >
          <FaMoneyBillWave />
        </Card1>
        <Card1
          title="Izin Siteplan - Dinas Perumahan Permukiman Cipta Karya & Tata Ruang"
          number="Nomor : 188/433/438.1.1.3/2020"
          date="Tanggal Terbit : 08 Juni 2020"
        >
          <FaHouse />
        </Card1>
        <div className="hidden md:block">
          <Card1
            title="Izin Mendirikan Bangunan (IMB) - Dinas Penanaman Modal & Pelayanan Terpadu Satu Pintu"
            number="Nomor : 658/2020"
            date="Tanggal Terbit : 08 November 2020"
          >
            <FaHouse />
          </Card1>
        </div>
      </div>
      <div className="flex w-[169px] mt-5 justify-center items-center mx-auto md:hidden">
        <Card1
          title="Izin Mendirikan Bangunan (IMB) - Dinas Penanaman Modal & Pelayanan Terpadu Satu Pintu"
          number="Nomor : 658/2020"
          date="Tanggal Terbit : 08 November 2020"
        >
          <FaHouse />
        </Card1>
      </div>
    </div>
  );
};

export default LegalitasTerjamin;
