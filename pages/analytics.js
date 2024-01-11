import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import createCriminal from "../ethereum/createCriminal";
import criminal from "../ethereum/criminal";

const Analytics = ({ criminalData }) => {
  // Menghitung distribusi umur dalam range tertentu
  const calculateAgeRanges = (data) => {
    const ageRanges = {
      '0-20': 0,
      '21-30': 0,
      '31-40': 0,
      '41-50': 0,
      '51+': 0,
    };

    data.forEach((element) => {
      const age = element[3];
      if (age <= 20) {
        ageRanges['0-20']++;
      } else if (age <= 30) {
        ageRanges['21-30']++;
      } else if (age <= 40) {
        ageRanges['31-40']++;
      } else if (age <= 50) {
        ageRanges['41-50']++;
      } else {
        ageRanges['51+']++;
      }
    });

    return ageRanges;
  };

  // Memformat data untuk diagram pie
  const ageRanges = calculateAgeRanges(criminalData);
  const labels = Object.keys(ageRanges);
  const data = Object.values(ageRanges);

  const criminal = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
         "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const calculateCityDistribution = (data) => {
    const cityCounts = {};
  
    data.forEach((element) => {
      const city = element[16]; // Ganti indeks dengan posisi kota asal di dalam element
  
      // Cek jika kota sudah ada dalam cityCounts, jika belum, inisialisasi dengan 1, jika sudah, tambahkan 1
      if (city) {
        cityCounts[city] = (cityCounts[city] || 0) + 1;
      }
    });
  
    return cityCounts;
  };
  
  const cityDistribution = calculateCityDistribution(criminalData);
  const cityLabels = Object.keys(cityDistribution);
  const cityData = Object.values(cityDistribution);
  
  const cityPieData = {
    labels: cityLabels,
    datasets: [
      {
        data: cityData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
         "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <div className="flex m-28 mb-0 bg-gray-500 rounded-xl p-10 shadow-md">
        <div className="flex-1 m-auto text-center">
          <h1 className="text-white font-medium text-lg">
            Umur Pelaku Kriminal
          </h1>
          <Pie
            data={criminal}
            width={150}
            height={150}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: 'white', // Ubah warna teks label menjadi putih
                  },
                },
              },
            }}
          />
        </div>
        <div className="flex-1 m-auto text-center">
          <h1 className="text-white font-medium text-lg">
            Kota Asal Pelaku Kejahatan
          </h1>
          <Pie data={cityPieData} width={150} height={150} options={{
            plugins: {
              legend: {
                labels: {
                  color: 'white', // Ubah warna teks label menjadi putih
                },
              },
            },
          }}/>
        </div>
      </div>
        <footer className="footer" style={{ marginBottom: '50px' }}>
    </footer>
    </div>
  );
  
};

export const getServerSideProps = async () => {
  const criminals = await createCriminal.methods.getDeployedContracts().call();
  const criminalData = await Promise.all(
    criminals.map((element) => criminal(element).methods.getData().call())
  );
  return {
    props: {
      criminalData,
    },
  };
};

export default Analytics;