"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
require("dotenv/config");
const keypair = web3_js_1.Keypair.generate();
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, Buffer.from(keypair.secretKey).toString('base64'));
//# sourceMappingURL=generateKeypair.js.map