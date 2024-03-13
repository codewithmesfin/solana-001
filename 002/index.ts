import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');

import "dotenv/config";



// (async()=>{
//     const balance = await connection.getBalance(address);

//     console.log(`The balance of the account at ${address} is ${balance} lamports`); 
//     console.log(`✅ Finished!`)
// })()

// (async()=>{

// const balance = await connection.getBalance(address);
// const balanceInSol = balance / LAMPORTS_PER_SOL;

// console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`); 
// console.log(`✅ Finished!`)
// })()

const publicKey = new PublicKey(`${process.env.publicKey}`);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async()=>{
    const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    
    console.log(
      `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
})()