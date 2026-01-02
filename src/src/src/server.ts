import express from 'express'
import { createServer } from 'http'
import { WebSocketServer } from 'ws'
import { startMonitor } from './monitor.js'

const app = express()
const server = createServer(app)
const wss = new WebSocketServer({ server })

// Serve frontend
app.use(express.static('web'))

// WebSocket
function broadcast(data: any) {
  wss.clients.forEach(c => {
    if (c.readyState === 1) {
      c.send(JSON.stringify(data))
    }
  })
}

// Start monitor
startMonitor(event => {
  broadcast({
    type: 'LEDGER_UPDATE',
    payload: event
  })
})

server.listen(8080, () =>
  console.log('🚪 Pi Door Unified running :8080')
)
