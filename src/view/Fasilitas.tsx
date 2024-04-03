import CardFasilitas from "@/components/CardFasilitas";
import Divider1 from "@/components/Divider1";
import * as React from "react";

interface IFasilitasProps {}

const Fasilitas: React.FunctionComponent<IFasilitasProps> = (props) => {
  return (
    <section className=" w-full h-fit md:h-[1629px] bg-[#E9E9E9] mt-10">
      <Divider1>Fasilitas Lengkap</Divider1>
      <h1 className="pt-[27px] md:pt-[119px] mx-[30px] md:mx-[227px] text-[12px] md:text-[24px]  text-center text-color1  ">
        Mulia Village menghadirkan fasilitas unggulan: rumah tahfidz untuk
        mendalami Al-Quran, masjid sebagai pusat kegiatan spiritual, area
        panahan untuk menyalurkan hobi dan keterampilan, serta kids playground
        sebagai ruang tumbuh kembang anak-anak.{" "}
      </h1>
      <div className="mx-[29px] md:mx-[77px] mt-[34px] md:mt-[159px] flex flex-row gap-[20px] md:gap-[129px] overflow-x-auto ">
        <CardFasilitas
          judul1="House"
          judul2="of"
          judul3="Tahfidz"
          deskripsi="Tahfidz: Membentuk Ruang Spiritual di Perumahan Syariah, Menyinari Hati, Menerangi Kehidupan."
          url="tahfidz3.png"
        />
        <CardFasilitas
          judul1="Mosque"
          judul2="Fatih"
          judul3="Firdaus"
          deskripsi="Masjid Fatih Firdaus menjadi Pusat Kehidupan Spiritual dan Sosial: Tempat Mempererat Tali Silaturahmi dan Menggali Kedamaian Hati di Tengah Perumahan Mulia Village."
          url="https://s3-alpha-sig.figma.com/img/57a4/287d/c44a5a790a9d3de01ae4defb6cf173a0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fobdLwlwL8FlgJjQpzOVlLj1x5ApaD88BMfuklKNnF6id0WmVNd0DNuUVY1Z9AgP4SwmOfzKjCd3qrcYpM~e7A~ePtzN1sUIV2pzS3kc0i4fStsFCMJtBE7S4z7MCxpiCDZ1l-c4Fpyk5cViT8myTu2r7rgu5vAIBXHo-Z~1FyedYzqL~w18t3G3c~6ru5SMBaJo-Igtc8-QjEBm39FM1FqxHJTsIupTjQNz1SuyFXi~YssFCT0NF7nWiYL-QUYuACzQbcvE7P57ZHSpcS9tHxkX1dFdf9~yPJiiYC9OQrtSCGEVoyAhlds5aBYSiOrf1GvJNnC~Xzb9-MAp-Ycm7g__"
        />
        <CardFasilitas
          judul1="Archery"
          judul2=""
          judul3="Area"
          deskripsi="Area Panahan, Jejak Kekuatan Hati: Tempat Menguji Fokus, Konsentrasi, dan Kedamaian di Perumahan Syariah yang Harmonis."
          url="https://s3-alpha-sig.figma.com/img/8f88/5635/991792869617aceef5510776b4fec42a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-K6kjo5ZRqy3OZrDvlPshPpdjVYYD~tyzf7pxbUoQfRgWYD8UeVb1NqYGE8D8FuCy0bqqC-bNxMUrJlpdNw1NR-lEM-RPbx1mX8bj429iUqWMCJz0HYKqw1iG0qUzgtOtpigqezx~fTpj-xpyhmBRIFbBSHaONHDu7d8s0jrMHA-YXbYysP~JfGc7PClmCCFludTi~LaSMAdxuw667kxB2XHlEoLPuCCBTqioOVzL9r1-urxAgbgGtuyth1XkWQt7EwjCIt14uLKHwiJuERzhd0fYZI7oZZciuFQ0F1Dm4YMOBcuL1uMBetqIJoeU7nd1CBfGs5lQp~-Dov~xQw7Q__"
        />
        <CardFasilitas
          judul1="Kids"
          judul2=""
          judul3="Playground"
          deskripsi="Playground Mulia Village , Ladang Bahagia Anak-anak: Tempat Membangun Kreativitas, Pertemanan, dan Kenangan manis di tengah perumahan islami."
          url="https://s3-alpha-sig.figma.com/img/0f53/0acf/88e5488b61abb0412106457941179cac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3TvYWwVj572~vCMw~xbMof2jrGtl~MQKC4NrFDWMjY-rL~5xGw5ZtBWRXBHts0aeHJ0p3ztcaTD~fjPIdhQgxAuF-3Tx52f9LahNxvmljJc5O3WWzCTc52oq9kpXP1JcWPuNODbz03dB8wzU6LrcT4A3VPKh9GCKq2ChZNIRGYr95HGm4aWpZgPY-cZheVtroNE40z2KBS5eEK-L0Swz2M4HLwoMIWiZdFJ9HG-Iu3EFn2blxEg8hzh4KdQBIct-R-MGv3l4OscwznkZzcnkIvXw5F1xQ3UNrexJEdgw~aQ2CZ3QZcHbprYgph1dvs-4n4y~79Ozzu-cWfrtRxgBg__"
        />
      </div>
    </section>
  );
};

export default Fasilitas;
