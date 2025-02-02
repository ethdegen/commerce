import createEndpoints from '@commerce/api/endpoints'
import type { LocalAPI } from '.'

const endpoints = {}

export default function localAPI(commerce: LocalAPI) {
  return createEndpoints(commerce, endpoints)
}
