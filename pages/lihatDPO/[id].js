import React from "react";
import criminal from "../../ethereum/criminal.js";

function lihatDPO({ criminalData, id, criminalRecords }) {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mt-28 mb-4 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-2xl font-semibold text-left text-white bg-gray-500 ">
            <img
              class="float-right h-32 rounded-lg bg-blue-100"
              src={"https://" + criminalData[0] + ".ipfs.w3s.link"}
              alt=""
            />
            Detail Kriminal
            <br />
            <br />
            Contract ID: {id}
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                NAMA
              </th>
              <th scope="col" class="px-6 py-3">
                NIK
              </th>
              <th scope="col" class="px-6 py-3">
                UMUR
              </th>
              <th scope="col" class="px-6 py-3">
                TINGGI
              </th>
              <th scope="col" class="px-6 py-3">
              TANGGAL LAHIR
              </th>
              <th scope="col" class="px-6 py-3">
                Kota Asal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white ">
              <td class="px-6 py-4">{criminalData[1]}</td>
              <td class="px-6 py-4">{criminalData[2]}</td>
              <td class="px-6 py-4">{criminalData[3]}</td>
              <td class="px-6 py-4">{criminalData[4]}</td>
              <td class="px-6 py-4">{criminalData[7]}</td>
              <td class="px-6 py-4">{criminalData[16]}</td>
            </tr>
            <tr class="text-xs text-gray-700 bg-blue-50 ">
              <th scope="col" class="px-6 py-3">
              WARNA RAMBUT
              </th>
              <th scope="col" class="px-6 py-3">
              WARNA RAMBUT WAJAH
              </th>
              <th scope="col" class="px-6 py-3">
              WARNA MATA
              </th>
              <th scope="col" class="px-6 py-3">
              KEWARGANEGARAAN
              </th>
              <th scope="col" class="px-6 py-3">
              BERAT
              </th>
              <th scope="col" class="px-6 py-3">
              PERAWAKAN
              </th>
            </tr>
            <tr class="bg-white">
              <td class="px-6 py-4  ">{criminalData[9]}</td>
              <td class="px-6 py-4">{criminalData[10]}</td>
              <td class="px-6 py-4">{criminalData[12]}</td>
              <td class="px-6 py-4">{criminalData[17]}</td>
              <td class="px-6 py-4">{criminalData[15]}</td>
              <td class="px-6 py-4">{criminalData[11]}</td>
            </tr>
            <tr class="text-xs text-gray-700  bg-blue-50 ">
              <th scope="col" class="px-6 py-3">
              NAMA IBU
              </th>
              <th scope="col" class="px-6 py-3">
              NAMA AYAH
              </th>
              <th scope="col" class="px-6 py-3">     
              AGAMA
              </th>
              <th scope="col" class="px-6 py-3">
              TEMPAT LAHIR
              </th>
              <th scope="col" class="px-6 py-3">
              TANDA IDENTIFIKASI
              </th>
              <th scope="col" class="px-6 py-3">
              WARNA KULIT
              </th>
            </tr>
            <tr class="bg-white ">
              <td class="px-6 py-4">{criminalData[5]}</td>
              <td class="px-6 py-4">{criminalData[6]}</td>
              <td class="px-6 py-4">{criminalData[14]}</td>
              <td class="px-6 py-4">{criminalData[18]}</td>
              <td class="px-6 py-4">{criminalData[13]}</td>
              <td class="px-6 py-4">{criminalData[8]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="rounded-lg mx-28 mb-16">
        <a href="/">
          <button
            type="button"
            class="shadow-md mr-4 text-white rounded-lg bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-24 py-2.5 text-center"
          >
            Return
          </button>
        </a>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mb-28 border border-gray">
        <table class="w-full text-sm text-left text-gray-700 ">
          <caption class="p-5 text-lg font-semibold text-left text-white bg-gray-500 ">
            Criminal Records
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-blue-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
              Nomor percobaan
              </th>
              <th scope="col" class="px-6 py-3">
              tanggal
              </th>
              <th scope="col" class="px-6 py-3">
              kejahatan yang dilakukan
              </th>
              <th scope="col" class="px-6 py-3">
              penjara
              </th>
              <th scope="col" class="px-6 py-3">
              lokasi
              </th>
            </tr>
          </thead>
          <tbody>
            {criminalRecords.map((element, index) => (
              <tr class="bg-white border-b ">
                <td class="px-6 py-4">{element[0]}</td>
                <td class="px-6 py-4">{element[1]}</td>
                <td class="px-6 py-4">{element[2]}</td>
                <td class="px-6 py-4">{element[3]}</td>
                <td class="px-6 py-4">{element[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

lihatDPO.getInitialProps = async ({ query }) => {
  const { id } = query;
  const criminalData = await criminal(id).methods.getData().call();
  const criminalRecords = await criminal(id).methods.getRecords().call();
  // console.log(criminalRecords);
  return { criminalData, id, criminalRecords };
};

export default lihatDPO;
