import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load base .env
dotenv.config();

// Load specific environment file if NODE_ENV is set
if (process.env.NODE_ENV) {
  dotenv.config({
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
  });
}

console.log(`Environment variables loaded for: ${process.env.NODE_ENV || 'default'}`);
