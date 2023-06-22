import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ComplexNavbar from "@/components/navbar";
import Navbar from "@/components/navbar";
import TypewriterComponent from "typewriter-effect";
import Footer from "@/components/footer";
import MyNavbar from "@/components/navbar";
import { LottieInteractivity } from "@lottiefiles/lottie-interactivity";
import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "@material-tailwind/react";
import ImgProfil from "./../../public/img/profile2.jpeg";
import Profil from "./../../public/img/profile.jpeg";
import Profil2 from "./../../public/img/profile3.jpg";
import CardUser from "@/components/CardUser";
import CardImg from "./../../public/img/card.jpeg";
import CardImg1 from "./../../public/img/card1.jpeg";
import CardImg2 from "./../../public/img/card2.jpeg";
import CardImage from "@/components/CardImage";
import { useRouter } from "next/router";
import Modals from "@/components/Dialog";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Greeting from "@/components/DialogHBD";

export default function Home() {
  const dataChat = [
    {
      code: "1",
      data: "Hallo...",
    },
    {
      code: "1",
      data: "Perkenalkan aku lendy dyah vannesa",
    },
    {
      code: "2",
      data: "Salam kenal len...",
    },
    {
      code: "2",
      data: "Btw... umur kamu berapa?",
    },
    {
      code: "1",
      data: "Umurku 19 nih barusan 1 menit yang lalu mungkin",
    },
    {
      code: "2",
      data: "Loh? kamu ulang tahun? HBD yang semoga panjang umur dan sehat selalu, semoga tahun ini kamu dapat menjadi yang lebih baik lagi dari tahun sebelumnya",
    },
    {
      code: "1",
      data: "Makasih bangettt loh",
    },
    {
      code: "2",
      data: "iyaaa cantikkkk btw 08 berapa??...",
    },
    {
      code: "1",
      data: "plakkkkkkk.....",
    },
  ];
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Lendy Dyah Vannesa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden">
        <MyNavbar />
        {/* Main Hero */}
        <section className="pt-48 lg:px-32 md:px-16 px-3 ">
          <div className="flex flex-col lg:flex-row justify-between relative">
            {/* <Player
              className='absolute -z-50 md:w-full w-80'
              autoplay
              speed={0.4}
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_MzXhvx0lcd.json"
            > */}
            <div
              className="flex flex-col justify-center"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h3 className="text-xl text-blue-gray-600 font-medium">
                Hello user, my name is
              </h3>
              <h1 className="text-7xl font-extrabold">Lendy Dyah Vannesa</h1>
              <div className="flex gap-1 text-2xl md:text-3xl mt-3 font-semibold">
                <p>I am </p>
                <div className="text-blue-gray-400">
                  <TypewriterComponent
                    options={{
                      strings: ["psychoo", "designer", "wibbu akuut"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <p className="text-red-500">and i like this</p>
              </div>
              <div className="mt-3 lg:w-2/3 text-lg">
                Im a student from the Muhammadiyah University of Malang
                majoring in psychology. I have a talent interest in the field of 
                <span className="text-blue-gray-600 font-bold">UI/UX</span>, 
                <span className="text-green-600 font-bold">Poster Design</span> 
                and also a 
                <span className="text-red-600 font-bold">Videographer</span>
              </div>
            </div>
            {/* </Player> */}
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <Player
                className="w-96"
                autoplay
                speed={1}
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_k56tZILcig.json"
              />
            </div>
          </div>
          <div className="text-center">
            <a href="#profile">
              <Button variant="outlined" color="blue-gray">
                Go !
              </Button>
            </a>
          </div>
        </section>
        {/* End Main hero */}
        {/* Profile */}
        <section className="mt-16">
          <div className="pt-48 lg:px-32 md:px-16 px-3 ">
            <h3 className="text-6xl font-semibold text-center" id="profile">
              <span
                span
                className="text-red-600"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                P r
              </span>{" "}
              o{" "}
              <span
                span
                className="text-green-600"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                f
              </span>{" "}
              i{" "}
              <span
                span
                className="text-red-600"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                l e
              </span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-10 justify-between mt-10">
              <div
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <Image
                  src={CardImg2}
                  className="rounded-md"
                  width="600"
                  height="200"
                  alt="user"
                />
              </div>
              <div
                className="mt-5"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h4 className="text-center text-lg">Sukhosi sukhosi dame!</h4>
                <div>
                  {/* Chat */}
                  {dataChat.map((items, index) =>
                    items.code == 1 ? (
                      <div
                        key={index}
                        className="flex justify-start gap-4 mt-1"
                      >
                        <Image
                          src={Profil}
                          className="rounded-full w-12 h-12"
                          alt="user"
                        />
                        <div className="flex justify-center items-center">
                          <p className="text-center align-middle bg-blue-gray-300 p-1 rounded-xl px-3 text-sm ">
                            {items.data}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div key={index} className="flex justify-end gap-4 mt-1">
                        <div className="flex justify-center items-center">
                          <p className="text-center align-middle bg-blue-gray-100 p-1 rounded-xl px-3 text-sm">
                            {items.data}
                          </p>
                        </div>
                        <Image
                          src={Profil2}
                          className="rounded-full w-12 h-12"
                          alt="user"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div
              className="mt-5 flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="lg:w-3/4 bg-blue-gray-500 p-4 rounded-2xl">
                Dari percakapan diatas sudah ketebak kan sifat nya gimana? tapi
                dia itu aslinya baik banget lohh sumpahhhh!. dari temen temen ku yang
                lain mungkin dia itu sih yang paling baik. Intinya sih kalau
                ngajak omong dia kita nggak boleh terlalu nge joke soalnya
                dianya gampang sakit hati. itu doang syaratnya eh terus ada lagi
                seh kalau kamu ngrokok siap siap aja chat tiktokmu isinya bahaya
                merokok HAHAHAHHAHA
              </p>
            </div>
          </div>
        </section>
        {/* end Profile */}
        {/* About Me */}
        <section>
          <div className="pt-48 mt-10 lg:px-32 md:px-16 px-3 ">
            <h3 className="text-6xl font-semibold text-center" id="about">
              <span
                className="text-green-600"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                A
              </span>{" "}
              b{" "}
              <span
                className="text-red-600"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                o u
              </span>{" "}
              t M{" "}
              <span
                className="text-red-600"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                e
              </span>
            </h3>
            {/* <Player 
              className='absolute text-center lg:w-[70rem] w-[50rem]'
              autoplay
              speed={0.6}
              loop
              src='https://assets5.lottiefiles.com/packages/lf20_aFpipgRHmc.json'
            /> */}
            <div
              className="flex justify-center mt-10"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <CardUser
                src={CardImg}
                name="Lendy Dyah Vannesa"
                jabatan="Mahasiswa"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-5 justify-center items-center">
              <div
                className="flex justify-center"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                <CardImage
                  src={Profil}
                  title="Anak Astrophile"
                  message="Anak astrophile itu harus suka langit ya kalau suka kamu gimana?"
                />
              </div>
              <div
                className="flex justify-center"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <CardImage
                  src={ImgProfil}
                  title="Suka anak kecil"
                  message="Katanya sih suka sama anak kecil, tapi gatau sih itu beneran atau enggak"
                />
              </div>
            </div>
          </div>
        </section>
        {/* end About Me */}
        <section className="pt-48 lg:px-32 md:px-16 px-3 " id="favorite">
          <h3 className="text-6xl font-semibold text-center">
            <span
              className="text-red-600"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              F a
            </span>{" "}
            v{" "}
            <span
              className="text-green-600"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              o r
            </span>{" "}
            i{" "}
            <span
              className="text-red-600"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              t e
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="mt-5" data-aos="fade-up" data-aos-duration="2000">
              <Player
                className="w-96"
                autoplay
                speed={1}
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_C67qsN3hAk.json"
              />
            </div>
            <div
              className="lg:mt-10 md:mt-10"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="text-xl font-semibold">
                Kamu tau <span className="text-red-600">favorite</span> dia apa?
              </h4>
              <div className="mt-5 text-lg ">
                Semua pasti tau sih kalau dia beli susu{" "}
                <span className="text-red-600 font-semibold">ultramilk</span>{" "}
                itu pasti rasa{" "}
                <span className="text-green-600 font-semibold">taro</span>, tapi
                makanan dan minuman favorite nya{" "}
                <span className="text-red-600 font-semibold">nggak hanya</span>{" "}
                ultramilk{" "}
                <span className="text-green-600 font-semibold">taro</span> aja
                lohh !!!, kalau kamu tau sih coba tebak ae teka teki ini
                WKWKWKKW
              </div>
              <div className="mt-5">
                <Modals method={handleOpen} open={open} />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-48 lg:px-32 md:px-16 px-3 pb-20" id="reward">
          <h3 className="text-6xl font-semibold text-center">
            R e{" "}
            <span
              className="text-red-600"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              w a r
            </span>{" "}
            d
          </h3>
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <div
              className="lg:mt-14"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="text-xl font-semibold">
                Happy Birthday{" "}
                <span className="text-red-600">30 Juni ya kan?</span>{" "}
              </h4>
              <div className="mt-5 text-lg ">
                <span className="text-green-600 font-semibold">
                  Selamat ulang tahun lendyy
                </span>{" "}
                , semoga diumur yang semakin banyak ini kamu bisa{" "}
                <span className="text-red-600 font-semibold">
                  menjadi manusia yang lebih baik lagi,
                </span>{" "}
                semoga tahun ini kamu bisa menjadi{" "}
                <span className="text-red-600 font-semibold">
                  versi terbaik dari dirimu
                </span>{" "}
                dan lebih baik dari tahun tahun sebelumnya, inget ya semakin
                tambah umur itu berarti{" "}
                <span className="text-red-600 font-semibold">
                  semakin dekat dengan ajal.
                </span>{" "}
                Kalau mau lihat ucapan yang lebih banyak bisa liat dibawah itu
                ya,
              </div>
              <div className="mt-5">
                <Greeting />
              </div>
            </div>
            <div
              className="mt-5 flex justify-end"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Player
                className="w-96"
                autoplay
                speed={1}
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_nguy2ppj.json"
              />
            </div>
          </div>
        </section>
        <footer className="w-full text-blue-gray-800 text-center py-10">
          Created by @laravel2004
        </footer>
      </main>
      {/* <Footer /> */}
    </>
  );
}
