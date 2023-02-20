import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import{abi} from './contract-abi';

const NftVerificationComponent = ({ userAddress }) => {

  const nav = useNavigate();
  const [hasNft, setHasNft] = useState(false);
  const contractAddress = '0xa0ac35347655943eb3355d49ae28d071da42858a'; // Replace with the address of the NFT contract you're checking for
  const rpcEndpoint = import.meta.env.VITE_RPC_QUICKNODE; // Replace with your Infura project ID

  useEffect(() => {
    const checkNftOwnership = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const balance = await contract.balanceOf(userAddress);
        setHasNft(balance.gt(0));
      } catch (error) {
        console.log(error);
      }
    };

    checkNftOwnership();
  }, [userAddress]);

  return (
    <>
      {hasNft ? (
        <>
          <p>You have the required NFT. Forwarding you to the next page...</p>
          {nav('/meet')}
        </>
      ) : (
        <>
          
         
        </>
      )}
    </>
  );
};

export default NftVerificationComponent;