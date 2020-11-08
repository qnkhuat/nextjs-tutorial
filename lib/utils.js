export const formatDateStr = date => {
  return new Date(date).toLocaleString('en-US', {
		month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}
