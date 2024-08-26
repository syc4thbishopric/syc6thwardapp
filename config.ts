export const config = {
  wardName: "Sycamores 6th Ward",
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "sycamores-6th",
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LDW_KEY,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: "66cbe1c0687d66450bd70413",
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}