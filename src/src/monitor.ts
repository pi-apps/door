import fetch from 'node-fetch'
import { LedgerEvent } from './types.js'

const HORIZON = 'https://api.mainnet.minepi.com'

export function startMonitor(
  onUpdate: (e: LedgerEvent) => void
) {
  let last = 0

  setInterval(async () => {
    try {
      const r = await fetch(`${HORIZON}/ledgers?order=desc&limit=1`)
      const j = await r.json()
      const l = j._embedded.records[0]

      if (l.sequence !== last) {
        last = l.sequence
        onUpdate({
          ledger: l.sequence,
          txCount: l.transaction_count,
          closeTime: Date.parse(l.closed_at)
        })
      }
    } catch (e) {
      console.error('monitor error', e)
    }
  }, 3000)
}
