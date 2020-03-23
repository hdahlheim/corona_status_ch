const formatter = new Intl.NumberFormat('de-CH', { style: 'decimal' })
export const formatNumber = number => {
  return formatter.format(number)
}
