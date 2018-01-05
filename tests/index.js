import * as assert from 'assert'
import BigNumber from 'bignumber.js'
import {
  convertBtcToSatoshi,
  convertEthToWei,
  convertSatoshiToBtc,
  convertWeiToEth
} from '../src/converters'

const BITCOIN_CONST = Math.pow(10,8).toString()
const ETHEREUM_CONST = Math.pow(10,18).toString()

describe('convertBtcToSatoshi', function() {
  it ('works as expected', function() {
    assert.ok(convertBtcToSatoshi)
    assert.equal(
      convertBtcToSatoshi(1),
      BITCOIN_CONST
    )
    assert.equal(
      convertBtcToSatoshi(0.0034),
      new BigNumber(0.0034).times(BITCOIN_CONST).toString()
    )
  })
})

describe('convertEthToWei', function() {
  it ('works as expected', function() {
    assert.ok(convertEthToWei)
    assert.equal(
      convertEthToWei(1),
      ETHEREUM_CONST
    )
    assert.equal(
      convertEthToWei(0.0034),
      new BigNumber(0.0034).times(ETHEREUM_CONST).toString()
    )
  })
})

describe('convertSatoshiToBtc', function() {
  it ('works as expected', function() {
    assert.ok(convertSatoshiToBtc)
    assert.equal(
      convertSatoshiToBtc(BITCOIN_CONST),
      1
    )
    assert.equal(
      convertSatoshiToBtc(0.0034),
      new BigNumber(0.0034).dividedBy(BITCOIN_CONST).toString()
    )
  })
})

describe('convertWeiToEth', function() {
  it ('works as expected', function() {
    assert.ok(convertWeiToEth)
    assert.equal(
      convertWeiToEth(ETHEREUM_CONST),
      1
    )
    assert.equal(
      convertWeiToEth(0.0034),
      new BigNumber(0.0034).dividedBy(ETHEREUM_CONST).toString()
    )
  })
})