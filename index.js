// Importamos las variables privadas de dotenv
import 'dotenv/config'
// Importamos el cliente de Jupiter para hacer llamadas a la Jupiter API
import { createJupiterApiClient } from '@jup-ag/api';

// Creamos constantes básicas a partir del archivo .env
const sol_pk = process.env.SOLANA_PRIVATE_KEY;
const rpc = process.env.SOLANA_RPC;

// Instanciamos el cliente de Jupiter
const jupiter = createJupiterApiClient();

// Creamos parámetros del trade que queremos hacer
const params = {
    inputMint: "So11111111111111111111111111111111111111112", // SOL
    outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
    amount: 10000000, // 0.1 SOL
    slippageBps: 100, // 1%
};

// Intentamos conseguir el quote
const quote = await jupiter.quoteGet(params)

if (!quote) {
    console.log("Failed to get quote!")
} else {
    console.log("Quote recieved:", quote)
}
