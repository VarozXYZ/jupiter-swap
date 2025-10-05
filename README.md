# Jupiter Swap - Descripción del proyecto
![Jupiter Swap](https://jup.ag/meta-og/jupiter-meta-swap.webp)

En este proyecto implementa una automatización de un swap en la blockchain de Solana. Este intercambio se hace a través del agregador de exchanges descentraliados (DEXes) Jupiter, el más importante de Solana, prescindiendo del uso de la interfaz de usuario de este. 

El programa realiza un swap de 0.001 SOL a USDC utilizando la API de Jupiter. El código está completamente comentado en español para facilitar la comprensión.

## 🛠️ Módulos NPM Utilizados

### 1. `@jup-ag/api` (v6.0.44)
**¿Por qué lo elegí?**
- Es el SDK oficial de Jupiter para interactuar con su API
- Proporciona métodos simplificados para obtener quotes y ejecutar swaps
- Maneja automáticamente la complejidad de encontrar las mejores rutas de intercambio

**¿Para qué sirve?**
- Obtener cotizaciones de precios para intercambios
- Generar transacciones de swap optimizadas
- Acceder a la liquidez agregada de múltiples DEXs en Solana

### 2. `@solana/web3.js` (v1.98.4)
**¿Por qué lo elegí?**
- Es el SDK oficial de Solana para JavaScript
- Proporciona todas las funcionalidades necesarias para interactuar con la blockchain
- Soporte completo para transacciones versionadas (VersionedTransaction)

**¿Para qué sirve?**
- Crear conexiones con la red de Solana
- Manejar claves privadas y firmar transacciones
- Enviar y confirmar transacciones en la blockchain

### 3. `bs58` (v6.0.0)
**¿Por qué lo elegí?**
- Es la librería estándar para codificación/decodificación Base58
- Solana utiliza Base58 para codificar claves privadas
- Ligera y eficiente para este propósito específico

**¿Para qué sirve?**
- Decodificar claves privadas desde formato Base58
- Convertir strings de claves privadas a formato binario para uso con Solana

### 4. `dotenv` (v17.2.3)
**¿Por qué lo elegí?**
- Permite cargar variables de entorno desde archivo .env
- Mejora la seguridad al mantener claves privadas fuera del código
- Estándar de la industria para manejo de configuración

**¿Para qué sirve?**
- Cargar configuración sensible (claves privadas, RPC endpoints)
- Separar configuración del código fuente
- Facilitar el despliegue en diferentes entornos

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js v18 o superior
- Una wallet de Solana con SOL para testing
- Clave privada de Solana en formato Base58

### Pasos de instalación

1. **Clonar el repositorio:**
```bash
git clone <tu-repositorio>
cd jupiter-swap
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
Crear un archivo `.env` en la raíz del proyecto:
```env
SOLANA_PRIVATE_KEY=tu_clave_privada_base58
SOLANA_PUBLIC_KEY=tu_clave_publica_base58
SOLANA_RPC=https://api.mainnet-beta.solana.com
```

4. **Ejecutar el programa:**
```bash
node index.js
```

## 📸 Capturas de Pantalla del Código


### Imports de paquetes necesarios
![Importación de los paquetes necesarios](/media/imports.png)

### Creación de variables de entorno y cliente Jupiter
![Creación de variables de entorno e instanciación del cliente Jupiter](/media/variables-entorno-cliente-jupiter.png)

### Configuración de parámetros del Quote
![Parámetros del quote y fetch del quote](/media/quote.png)

### Configuración de parámetros del Swap
![Configuración de parámetros del Swap](/media/swap.png)

### Creación, firma y lanzamiento de transacción
![Lanzamiento de transacción](/media/transaccion.png)

### Ejemplo de salida
![Ejemplo de salida de swap](/media/resultado.png)
