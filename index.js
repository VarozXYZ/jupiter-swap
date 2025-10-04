// Importamos las variables privadas de dotenv
import 'dotenv/config'
// Importamos el cliente de Jupiter para hacer llamadas a la Jupiter API
import { createJupiterApiClient } from '@jup-ag/api';

// Creamos constantes básicas a partir del archivo .env
const sol_private_key = process.env.SOLANA_PRIVATE_KEY;
const sol_public_key = process.env.SOLANA_PUBLIC_KEY;
const rpc = process.env.SOLANA_RPC;

// Instanciamos el cliente de Jupiter
const jupiter = createJupiterApiClient();

// Creamos parámetros del trade que queremos hacer
const quote_params = {
    inputMint: "So11111111111111111111111111111111111111112", // SOL
    outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
    amount: 10000000, // 0.1 SOL
    slippageBps: 100, // 1%
};

// Intentamos conseguir el quote
const quote = await jupiter.quoteGet(quote_params)

// Si no hay quote correcto, lanzamos error y terminamos el programa
if (!quote) {
    throw new Error("Failed to get quote!")  
}
// Sacamos los datos del quote por consola
console.log("Quote recieved:", quote)

// Definimos los datos del Swap para hacer la llamada usando el quote recibido

const swap_params = {
    swapRequest: {
      quoteResponse: quote,
      userPublicKey: sol_public_key,
      dynamicComputeUnitLimit: true,
      dynamicSlippage: true,
      prioritizationFeeLamports: {
        priorityLevelWithMaxLamports: {
          maxLamports: 350000,
          priorityLevel: "veryHigh",
        },
      },
    },
  }

// Hacemos otro fetch a la API para conseguir los datos de la transaccion
const swap_data = await jupiter.swapPost(swap_params)

// Si no hay swap data correcto, lanzamos error y terminamos el programa
if (!swap_data) {
    throw new Error("Failed to get swap params!")  
}
// Sacamos los datos del quote por consola
console.log("Swap data recieved:", swap_data)




