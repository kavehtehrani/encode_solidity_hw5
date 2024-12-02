"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BanknotesIcon, TicketIcon, TrophyIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Decentralized Lottery</span>
            <span className="block text-2xl mb-2">Welcome to our secure and transparent lottery system</span>
          </h1>
        </div>

        <div className="flex-grow bg-base-300 w-full px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BanknotesIcon className="h-8 w-8 fill-secondary" />
              <p className="mt-2 font-bold">Buy Tokens</p>
              <p className="mt-1">Purchase lottery tokens with ETH to participate</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <TicketIcon className="h-8 w-8 fill-secondary" />
              <p className="mt-2 font-bold">Place Bets</p>
              <p className="mt-1">Use your tokens to place bets and join the lottery</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <TrophyIcon className="h-8 w-8 fill-secondary" />
              <p className="mt-2 font-bold">Win Prizes</p>
              <p className="mt-1">Winners are selected randomly and can claim their prizes</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/lottery"
              className="btn btn-primary rounded-full capitalize font-normal font-white w-64 flex items-center gap-1"
            >
              Enter Lottery
              <TicketIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
