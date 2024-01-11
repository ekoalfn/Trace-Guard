import React from "react";
import Lottie from "react-lottie";
import * as heroData from "../animations/hero.json";
import * as securityData from "../animations/security.json";
import * as ethereumData from "../animations/ethereum.json";
import * as workFlowData from "../animations/workflow.json";

function landingPage() {
  const heroOptions = {
    loop: true,
    autoplay: true,
    animationData: heroData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const securityOptions = {
    loop: true,
    autoplay: true,
    animationData: securityData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const ethereumOptions = {
    loop: true,
    autoplay: true,
    animationData: ethereumData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const workFlowOptions = {
    loop: true,
    autoplay: true,
    animationData: workFlowData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div class="flex m-auto">
        <div class="flex-1 my-48 ml-32">
          <h1 class="text-6xl text-black font-bold">Trace Guard</h1>
          <br />
          <h2 class="text-3xl text-black font-semibold">
            Lacak kriminilitas dan pengapan laporan  
          </h2>
          <h2 class="text-xl text-black font-semibold">
            Developed By Muhamad Eko Alfianto, Clarissa Monique dan Yudha Satria
          </h2>
        </div>
        <div class="flex-1 my-6">
          <Lottie options={heroOptions} height={500} width={500} />
        </div>
      </div>
      <hr class="w-2/3 mx-auto h-0.5 mt-16 bg-blue-200 border-0"></hr>
      <div class="flex m-auto">
        <div class="flex-1 my-12 mx-24">
          <Lottie options={securityOptions} height={500} width={500} />
        </div>
        <div class="flex-1 p-6 bg-gray-500 rounded-lg shadow mr-32 my-32">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-400">
            About Our Project
          </h5>
          <p class="text-xl text-white font-normal">Kejahatan adalah perbuatan melanggar hukum yang bisa membuat orang yang melakukannya dihukum. Catatan kriminal adalah daftar hukuman yang pernah diterima seseorang. Tujuan dari catatan kriminal ini adalah membantu polisi dan penyidik dalam melacak penjahat serta mengenali jenis orang yang mereka tangani. Dalam proyek akhir tahun ini, kami ingin membuat sistem di mana catatan kriminal dapat disimpan dengan aman dan sulit diubah tanpa sepengetahuan pihak berwenang. Cara kami melakukannya adalah dengan menyimpan catatan tersebut menggunakan teknologi blockchain, sehingga sistemnya sederhana dan mudah digunakan. Kami akan menggunakan Next.js dan teknologi blockchain Ethereum untuk meningkatkan keamanannya.
          </p>
        </div>
      </div>
      <hr class="w-2/3 mx-auto h-0.5 mt-16 bg-blue-200 border-0"></hr>
      <div class="flex m-auto">
        <div class="flex-1 p-6 bg-gray-500 rounded-lg shadow ml-32 my-32">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-400">
            Fitur dan Alur Kerja
          </h5>
          <p class="text-xl text-white font-normal">
            Seorang pengguna dapat masuk ke sistem kami sebagai warga sipil atau petugas polisi. Seorang warga sipil dapat mengajukan laporan FIR, laporan kehilangan, atau melaporkan orang yang hilang. Laporan-laporan ini kemudian dapat ditinjau oleh petugas polisi yang sudah masuk. Setelah menganalisis laporan-laporan tersebut, seorang petugas polisi dapat memulai penyelidikan. Dalam kasus laporan kehilangan atau laporan orang hilang, jika penyelidikan menyimpulkan dan orang atau properti tersebut ditemukan, mereka dapat ditandai sebagai ditemukan. Namun, jika itu adalah penyelidikan FIR dan seorang tersangka ditemukan, lembar dakwaan dapat dikeluarkan dengan informasi tentang tersangka, dakwaan yang mereka hadapi, dan rincian tentang persidangan mereka di pengadilan. Jika mereka dinyatakan bersalah di pengadilan, maka mereka dapat ditandai sebagai bersalah dan ditambahkan ke catatan kriminal. Jika pelaku kejahatan melakukan kejahatan lebih lanjut di masa depan, catatan-catatan tersebut juga dapat ditambahkan ke yang sebelumnya.
          </p>
        </div>
        <div class="flex-1 my-20 mr-24">
          <Lottie options={workFlowOptions} height={500} width={500} />
        </div>
      </div>
    </>
  );
}

export default landingPage;
