import * as React from "react";
import { useState } from "react";
import createCriminal from "../ethereum/createCriminal.js";
import { useRouter } from "next/router";
import { db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { create } from '@web3-storage/w3up-client'

const client = await create();

export default function AddressForm() {

  const router = useRouter();
  const [name, setName] = useState("");
  const [civID, setCid] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [physique, setPhysique] = useState("");
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [dob, setDob] = useState("");
  const [skinTone, setSkinTone] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [facialHairColor, setFacialHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [mark, setMark] = useState("");
  const [religion, setReligion] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [image, setImage] = useState();

  function cancel(event) {
    event.preventDefault();
    router.push("/");
  }

  async function submit(event) {
    event.preventDefault();
      await client.login('kouleroy1@gmail.com') //masukkan email web3storage
      await client.setCurrentSpace('did:key:z6Mkuzg1AYXsbr2mKqNTD9irh7tFUUreDxXmAYmKKbxcUvMl')    //Masukkan did:key dari web3storage
      const pid= await client.uploadDirectory(image);
    const data = [
      pid,
      name,
      civID,
      age,
      height,
      mother,
      father,
      dob,
      skinTone,
      hairColor,
      facialHairColor,
      physique,
      eyeColor,
      mark,
      religion,
      weight,
      nativeLanguage,
      citizenship,
      placeOfBirth,
    ];
    const transaction = await createCriminal.methods.createCriminal(data).send({
      from: "0x721Af6E3A10fE402F451fEa67E5C8F7854C78353",
      gas: 6721975,
    });
    await setDoc(
      doc(db, "create criminal transactions", transaction.transactionHash),
      transaction
    );
    router.push("/");
  }
  return (
    <form
      onSubmit={submit}
      class="bg-gray-500 m-28 border border-gray p-16 shadow-md sm:rounded-lg"
    >
      <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl mb-8">
      Tambahkan Pidana
      </h1>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-white "
          >
            Nama
          </label>
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
            class="border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="CID"
            class="block mb-2 text-sm font-medium text-white "
          >
            NIK
          </label>
          <input
            onChange={(event) => setCid(event.target.value)}
            type="tel"
            pattern="[0-9]{16}"
            id="CID"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="age"
            class="block mb-2 text-sm font-medium text-white "
          >
            Umur 
          </label>
          <input
            onChange={(event) => setAge(event.target.value)}
            type="number"
            id="age"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="height"
            class="block mb-2 text-sm font-medium text-white "
          >
            Tinggi (in cm)
          </label>
          <input
            onChange={(event) => setHeight(event.target.value)}
            type="number"
            id="height"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="weight"
            class="block mb-2 text-sm font-medium text-white "
          >
            Berat (in kg)
          </label>
          <input
            onChange={(event) => setWeight(event.target.value)}
            type="number"
            id="weight"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="physique"
            class="block mb-2 text-sm font-medium text-white "
          >
            Perawakan
          </label>
          <input
            onChange={(event) => setPhysique(event.target.value)}
            type="text"
            id="physique"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="mother"
            class="block mb-2 text-sm font-medium text-white "
          >
            Nama Ibu
          </label>
          <input
            onChange={(event) => setMother(event.target.value)}
            type="text"
            id="mother"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="father"
            class="block mb-2 text-sm font-medium text-white "
          >
            Nama Ayah
          </label>
          <input
            onChange={(event) => setFather(event.target.value)}
            type="text"
            id="father"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="DOB"
            class="block mb-2 text-sm font-medium text-white "
          >
            Tanggal lahir
          </label>
          <input
            onChange={(event) => setDob(event.target.value)}
            type="date"
            id="DOB"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="birth"
            class="block mb-2 text-sm font-medium text-white "
          >
            Tempat Lahir
          </label>
          <input
            onChange={(event) => setPlaceOfBirth(event.target.value)}
            type="text"
            id="birth"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="skinTone"
            class="block mb-2 text-sm font-medium text-white "
          >
            Warna kulit
          </label>
          <input
            onChange={(event) => setSkinTone(event.target.value)}
            type="text"
            id="skinTone"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="hairColor"
            class="block mb-2 text-sm font-medium text-white "
          >
            Warna rambut
          </label>
          <input
            onChange={(event) => setHairColor(event.target.value)}
            type="text"
            id="hairColor"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="facialHairColor"
            class="block mb-2 text-sm font-medium text-white "
          >
            Warna Rambut Wajah
          </label>
          <input
            onChange={(event) => setFacialHairColor(event.target.value)}
            type="text"
            id="facialHairColor"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="eyeColor"
            class="block mb-2 text-sm font-medium text-white "
          >
            Warna mata
          </label>
          <input
            onChange={(event) => setEyeColor(event.target.value)}
            type="text"
            id="eyeColor"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="mark"
            class="block mb-2 text-sm font-medium text-white "
          >
            Tanda identifikasi
          </label>
          <input
            onChange={(event) => setMark(event.target.value)}
            type="text"
            id="mark"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="religion"
            class="block mb-2 text-sm font-medium text-white "
          >
            Agama 
          </label>
          <input
            onChange={(event) => setReligion(event.target.value)}
            type="text"
            id="religion"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="lang"
            class="block mb-2 text-sm font-medium text-white "
          >
            Kota Asal
          </label>
          <input
            onChange={(event) => setNativeLanguage(event.target.value)}
            type="text"
            id="lang"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="citizenship"
            class="block mb-2 text-sm font-medium text-white "
          >
            Kewarganegaraan
          </label>
          <input
            onChange={(event) => setCitizenship(event.target.value)}
            type="text"
            id="citizenship"
            class=" border border-blue-300 focus:outline-none focus:ring-4 focus:border-blue-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
      </div>

      <label
        class="block mb-2 text-sm font-medium text-white "
        for="large_size"
      >
        Upload Image
      </label>
      <input
        onChange={(event) => setImage(event.target.files)}
        class="p-4 block w-full text-lg text-gray-900 border border-blue-300 rounded-lg cursor-pointer bg-white  focus:outline-none focus:ring-4 focus:border-blue-50 mb-8"
        id="large_size"
        type="file"
        required
      ></input>

      <button
        type="button"
        onClick={cancel}
        class="bg-white text-blue-700 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center mr-4"
      >
        Cancel
      </button>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
}
