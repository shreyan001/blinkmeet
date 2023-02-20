import * as React from 'react';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { Connect } from '../functions/Connect';
import image from "./image.webp";
import { useNavigate } from 'react-router-dom';



const MeetDetails = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img className="w-16 h-16 mr-4 rounded-full" src="/logo.png" alt="Meet avatar" />
        <div>
          <p className="font-bold text-xl text-white">EthforAll</p>
          <p className="text-gray-400">Online</p>
        </div>
      </div>
      <Connect/>
    </div>
  );
};

const MintNFT = () => {
  const navigate = useNavigate();
  const {
    
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: '0xa0ac35347655943eb3355d49ae28d071da42858a',
    abi: [
      {
        name: 'mint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'mint',
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div className="rounded-lg h-auto w-full flex flex-col mt-12 items-center justify-center p-4">
      <div className="w-2/3 h-fit flex flex-row items-center p-5 bg-black1 rounded-3xl">
        <img className="w-1/2 h-auto " src={image} alt="NFT preview" />
       
      <div className="flex flex-col items-center w-1/2 h-auto justify-center gap-5 ">
       <div className="flex flex-col items-center w-7/12 h-full py-10 bg-black4 rounded-2xl gap-10 justify-center"> <h2 className="text-xl font-bold mb-2">Mint BlinkPass</h2>
        <button disabled={!write || isLoading} onClick={() => write()} className="button1 text-white rounded-lg px-4 py-2">
          {isLoading ? 'Minting...' : 'Mint'}
        </button>
        {isSuccess && (
          <div className="text-green-500 mt-2">
            Successfully minted your NFT!
            <div>
              <a href={`//https://mumbai.polygonscan.com//tx/${data?.hash}`}>polygonscan</a>
              <button onClick={()=>navigate('/meet/53382')} className='button1'>Enter Meet</button>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div className="text-red-500 mt-2">
            Error: {(prepareError || error)?.message}
          </div>
        )}
      </div></div></div>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <MeetDetails />
      <MintNFT />
    </div>
  );
};

export default App;

