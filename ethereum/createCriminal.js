import web3 from './web3';
import CreateCriminal from "../artifacts/CreateCriminal_metadata.json";

const instance = new web3.eth.Contract(
  CreateCriminal.output.abi,
  "0x3Bd098d81d9B62fb61dd3768c1736c28a5bEbE41"
);

export default instance;