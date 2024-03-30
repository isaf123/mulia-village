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
interface ILegalitasTerjaminProps {}

const LegalitasTerjamin: React.FunctionComponent<ILegalitasTerjaminProps> = (
  props
) => {
  return (
    <div>
      <p className="text-color1 text-center text-2xl py-[7rem]">
        Kami sangat memahami keinginan customer mengenai legalitas. Jangan
        khawatir dengan Mulia <br /> Village Juanda, kami sudah melengkapi
        hunian kami dengan semua perizinan hingga IMB. Sehingga <br />
        anda hanya perlu beli dan tinggal.
      </p>
      <div className="gap-10 flex px-[5rem]">
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
      </div>
      <div className="gap-10 flex px-[5rem] pt-20">
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
      </div>
      <div className="gap-10 flex px-[5rem] pt-20">
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
