import React from "react";

function HowToBuy() {
  return (
    <>
      <div className="how_to_buy_wrapper">
        <h1 className="buy_heading font-bold">How to Buy</h1>
        <div className="how_to_buy_bars">
          <div className="how_to_buy_bar">
            <h1 className="font-bold text-3xl">Step 1</h1>
            <p>
              <b>Mobile Users:</b> Download the Phantom app for free.
              <br /> <b>Desktop Users:</b> Download the Phantom chrome extension
            </p>
            <a href="https://phantom.app/" target="_blank">
              <img src="/images/phantomlogo-CFuGsVh2.jpeg" alt="" />
            </a>
          </div>
          <div className="how_to_buy_bar">
            <h1 className="font-bold text-3xl">Step 2</h1>
            <p>
              Fund your wallet with Solana, you can buy Solana from an exchange
              or cross chain swap and send it to your wallet.
            </p>
            <a
              href="https://phantom.app/learn/crypto-101/best-solana-wallet"
              target="_blank"
            >
              <img src="/images/solanalogo-DYviJvuA.png" alt="" />
            </a>
          </div>
          <div className="how_to_buy_bar">
            <h1 className="font-bold text-3xl">Step 3</h1>
            <p>Go to Raydium or Jupiter and swap your Solana for $Chillpnut</p>
            <div className="multiple_images">
              <a
                href="https://raydium.io/swap/?inputMint=sol&amp;outputMint=9UnFs2gat5zE5uBodCWbPcprLDuGJTXZL4UhnHaPpump"
                target="_blank"
              >
                <img src="/images/raydiumlogo-CkSmBh9j.png" alt="" />
              </a>
              <a
                href="https://jup.ag/swap/SOL-9UnFs2gat5zE5uBodCWbPcprLDuGJTXZL4UhnHaPpump"
                target="_blank"
              >
                <img src="/images/juplogo-D90a0f9I.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToBuy;
