import { Keypair } from "@solana/web3.js";
import "dotenv/config";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `,  Buffer.from(keypair.secretKey).toString('base64'));

