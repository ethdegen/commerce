/**
 * This file is expected to be used in next.config.js only
 */

const path = require('path')
const fs = require('fs')
const merge = require('deepmerge')
const prettier = require('prettier')

const core = require('./lib/commerce/config.cjs')

function getProviderName() {
  return '../commerce-local'
}

function withCommerceConfig(nextConfig = {}) {
  const config = merge(
    { commerce: { provider: getProviderName() } },
    nextConfig
  )
  const { commerce } = config
  const { provider } = commerce

  if (!provider) {
    throw new Error(
      `The commerce provider is missing, please add a valid provider name or its environment variables`
    )
  }

  return core.withCommerceConfig(config)
}

module.exports = { withCommerceConfig, getProviderName }
