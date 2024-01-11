import web3 from './web3';
import CreateCriminal from "../artifacts/CreateCriminal_metadata.json";

const instance = new web3.eth.Contract(
  CreateCriminal.output.abi,
  "0xD3B49926CF5555CD71934dDd86D260f35100E862"
);

export default instance;