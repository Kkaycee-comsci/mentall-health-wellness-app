// testFallback.js
import { fallbackMessages } from './src/services/fallbackMessage.js'

const msg = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
console.log(msg)
