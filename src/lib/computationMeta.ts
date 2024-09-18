interface ComputationMetaResponse {
  phalaSendXcmMessageCount: number
  phalaReceivedXcmMessageCount: number
  phalaSignedExtrinsicCount: string
  phalaIdlePInit: number,
  phalaIdlePInstant: number
  phalaIdleWorkerCount: number
  khalaSendXcmMessageCount: number
  khalaReceivedXcmMessageCount: number
  khalaSignedExtrinsicCount: string
  khalaIdlePInit: number,
  khalaIdlePInstant: number
  khalaIdleWorkerCount: number
}

export interface ComputationMeta {
  onlineWorkers: number
  vCpu: number
  crossChainTx: number
  tx: bigint
}

export async function getComputationMeta(): Promise<Omit<ComputationMeta, 'tx'> & { tx: string }> {
  let data: ComputationMetaResponse = {
    phalaIdlePInit: 0,
    phalaIdlePInstant: 0,
    phalaIdleWorkerCount: 0,
    phalaReceivedXcmMessageCount: 0,
    phalaSendXcmMessageCount: 0,
    phalaSignedExtrinsicCount: '0',
    khalaIdlePInit: 0,
    khalaIdlePInstant: 0,
    khalaIdleWorkerCount: 0,
    khalaReceivedXcmMessageCount: 0,
    khalaSendXcmMessageCount: 0,
    khalaSignedExtrinsicCount: '0',
  }
  try {
    const res = await fetch('https://phala-website-meta.phala-dev.workers.dev', { next: { revalidate: 0 } })
    data = await res.json()
    console.log('computation meta', data)
  } catch (err) {
    console.log('failed to fetch computation meta', err)
    // noop
  }

  const onlineWorkers = data.phalaIdleWorkerCount + data.khalaIdleWorkerCount
  const vCpu = Math.floor(
    (data.phalaIdlePInit + data.khalaIdlePInit) / 150
  )
  const crossChainTx =
    data.phalaSendXcmMessageCount +
    data.khalaSendXcmMessageCount +
    data.phalaReceivedXcmMessageCount +
    data.khalaReceivedXcmMessageCount
  const tx =
    BigInt(data.phalaSignedExtrinsicCount) +
    BigInt(data.khalaSignedExtrinsicCount)

  return {onlineWorkers, vCpu, crossChainTx, tx: tx.toString()}
}
