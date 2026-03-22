import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createMetadataAccountV3 } from "@metaplex-foundation/mpl-token-metadata";
import { publicKey, signerIdentity, createSignerFromKeypair } from "@metaplex-foundation/umi";
import { fromWeb3JsKeypair } from "@metaplex-foundation/umi-web3js-adapters";
import { Keypair } from "@solana/web3.js";
import * as fs from "fs";

const MINT_ADDRESS = "EUxtFoBZvYTnV2iuKKuQCz8ZKjXe8BTrGeuvRiCYJLyQ";
const METADATA_URI = "https://dropa.dev/token-metadata.json";

async function main() {
  const walletPath = process.env.HOME + "/system-dropshoping/dropaccess-wallet.json";
  const secretKey = JSON.parse(fs.readFileSync(walletPath, "utf-8"));
  const web3Keypair = Keypair.fromSecretKey(Uint8Array.from(secretKey));

  console.log("Wallet:", web3Keypair.publicKey.toBase58());
  console.log("Mint:", MINT_ADDRESS);

  const umi = createUmi("https://api.mainnet-beta.solana.com");
  const umiKeypair = fromWeb3JsKeypair(web3Keypair);
  const signer = createSignerFromKeypair(umi, umiKeypair);
  umi.use(signerIdentity(signer));

  console.log("Creating metadata account...");

  await createMetadataAccountV3(umi, {
    mint: publicKey(MINT_ADDRESS),
    mintAuthority: signer,
    payer: signer,
    updateAuthority: signer.publicKey,
    data: {
      name: "DropAccess",
      symbol: "DROPA",
      uri: METADATA_URI,
      sellerFeeBasisPoints: 0,
      creators: null,
      collection: null,
      uses: null,
    },
    isMutable: true,
    collectionDetails: null,
  }).sendAndConfirm(umi);

  console.log("=== METADATA ADDED SUCCESSFULLY ===");
  console.log("Name: DropAccess");
  console.log("Symbol: DROPA");
  console.log("Logo: https://dropa.dev/images/logo.png");
}

main().catch(console.error);
