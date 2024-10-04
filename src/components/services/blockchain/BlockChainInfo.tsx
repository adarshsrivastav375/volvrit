import Image from "next/image";

const BlockchainInfo: React.FC = () => {
  return (
    <div className="bg-[#0C2C4F]">
      <div className="text-white py-20 max-w-9xl mx-auto px-4 md:px-6 lg:px-20 shadow-lg flex flex-col md:flex-row justify-start md:items-start md:gap-10">
        <div className="flex-shrink-0 mb-4 md:mb-0 lg:w-1/3">
          <h2 className="text-2xl lg:text-4xl 3xl:text-6xl 4xl:text-7xl font-bold mb-2">
            How Blockchain <br /> Works
          </h2>
          <div className="bg-gradient-to-b from-[#044CAD] via-[#152F87] to-[#211C63] w-full flex justify-center p-5 items-center rounded-xl my-8">
            <Image
              width={100}
              height={100}
              alt="Bitcoin Icon"
              className="w-3/5 rounded-full"
              src={"https://volvrit.s3.ap-south-1.amazonaws.com/bitcoin.png"}
            />
          </div>
        </div>
        <div className="flex-grow lg:w-2/3">
          <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
            A blockchain consists of blocks of data that are linked together in
            a chronological chain. Each block contains a set of transactions,
            and once it is validated and added to the chain, it cannot be
            altered without altering all subsequent blocks. This immutability
            ensures that the data remains secure and trustworthy.
          </p>
          <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-5">
            The decentralized nature of blockchain means that it operates on a
            peer-to-peer network of computers (or nodes). Each node maintains a
            copy of the entire blockchain, and transactions are verified through
            a consensus mechanism, such as Proof of Work (PoW) or Proof of Stake
            (PoS). This ensures transparency and reduces the risk of fraud, as
            all participants have access to the same information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainInfo;
