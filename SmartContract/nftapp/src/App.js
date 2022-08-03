import { useState, useEffect } from "react";
import { ethers } from "ethers";
import SecondThoughts from "./artifacts/contracts/SecondThoughts.sol/SecondThoughts.json";
import "./App.css";
import img2 from "./img/2.png";
import img5 from "./img/5.png";
import img8 from "./img/8.png";
import img14 from "./img/14.png";
import img25 from "./img/25.png";
import img30 from "./img/30.png";
import img33 from "./img/33.png";
import img34 from "./img/34.png";
import img35 from "./img/35.png";
import img48 from "./img/48.png";

const STCaddress = "0x06D237CB61B5119c8C967Ed39D8dc5e3bc5E106A"; //input contract deploy adress

function App() {
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [account, setAccount] = useState([]);

  useEffect(() => {
    fetchData();
    getAccounts();
  }, []);

  async function getAccounts() {
    if (typeof window.ethereum !== "undefined") {
      let accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      setAccount(accounts);
      console.log(accounts[0]);
    }
  }

  async function fetchData() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        STCaddress,
        SecondThoughts.abi,
        provider
      );
      try {
        const cost = await contract.cost();
        const totalSupply = await contract.totalSupply();
        const object = { cost: String(cost), totalSupply: String(totalSupply) };
        setData(object);
      } catch (err) {
        setError(err.message);
      }
    }
  }

  async function mint() {
    if (typeof window.ethereum !== "undefined") {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        STCaddress,
        SecondThoughts.abi,
        signer
      );
      try {
        let overrides = {
          from: accounts[0],
          value: data.cost,
        };
        const transaction = await contract.mint(accounts[0], 1, overrides);
        await transaction.wait();
        fetchData();
      } catch (err) {
        setError(err.message);
      }
    }
  }

  async function withdraw() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        STCaddress,
        SecondThoughts.abi,
        signer
      );
      try {
        const transaction = await contract.withdraw();
        await transaction.wait();
      } catch (err) {
        setError(err.message);
      }
    }
  }

  return (
    <div className="App">
      {account[0] === "0xfe5894f988b1a3516b1dd308dfbaeaf8c7b4a807" && <button className="withdraw" onClick={withdraw}>Withdraw</button>}
      <div className="container">
        <div className="banner">
          <img src={img2} alt="img2" />
          <img src={img5} alt="img5" />
          <img src={img8} alt="img8" />
          <img src={img14} alt="img14" />
          <img src={img25} alt="img25" />
          <img src={img30} alt="img30" />
          <img src={img33} alt="img33" />
          <img src={img34} alt="img34" />
          <img src={img35} alt="img35" />
          <img src={img48} alt="img48" />
        </div>
        {error && <p>{error}</p>}
        <h1>Become a member of the Second Thoughts Club!</h1>
        <p className="count">{data.totalSupply} /50 NFTs sold</p>
        <button onClick={mint}>MINT one NFT</button>
        <p className="cost">
          1 Second Thoughts Club NFT costs: {data.cost / 10 ** 18} eth (+gas
          fees)
        </p>
      </div>
    </div>
  );
}

export default App;
