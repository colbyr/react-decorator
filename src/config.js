import invariant from 'invariant'

function isFunc(fn) {
  return typeof fn === 'function'
}

function isOptionalFunc(fn) {
  return !fn || isFunc(fn)
}

export function isValidConfig(config) {
  return (
    isFunc(config.getDisplayName) &&
    isFunc(config.getValues) &&
    isOptionalFunc(config.getPropTypes) &&
    isOptionalFunc(config.componentWillMount) &&
    isOptionalFunc(config.componentDidMount) &&
    isOptionalFunc(config.componentWillReceiveProps) &&
    isOptionalFunc(config.handleChange) &&
    isOptionalFunc(config.componentWillUnmount)
  )
}

export function enforceValidConfig(config) {
  invariant(
    isValidConfig(config),
    'invalid configuration'
  )
  return config
}