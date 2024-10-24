import { add, subtract } from '@src/math/basicmaths';
import dotenv from 'dotenv-safe';
dotenv.config();

console.log(add(1, 2)); // 3
console.log(add(4, 5)); // 9
console.log(subtract(5, 4)); // 1
console.log(process.env.MY_NAME);
