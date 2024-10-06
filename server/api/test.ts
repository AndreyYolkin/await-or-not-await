const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default defineEventHandler(async (event) => {
  await delay(15000)
  return {
    message: 'Hello from API',
  }
})