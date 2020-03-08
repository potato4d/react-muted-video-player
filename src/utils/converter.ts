export function toBool(val: boolean | null | undefined, defaultValue: boolean) {
  if (val === undefined) {
    return defaultValue
  }
  return !!val
}
