import Papa from 'papaparse'

export const fetchCsv = async (url) => {
  const csv = new Promise((resolve, reject) =>
    Papa.parse(url, {
      skipEmptyLines: true,
      download: true,
      complete: (results) => {
        resolve(results.data)
      },
      error: (err) => {
        reject(err)
      }
    })
  )
  const result = await csv
  return result
}
