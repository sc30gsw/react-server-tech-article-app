type FetchArgs = Parameters<typeof fetch>

export async function fetcher<T>(url: FetchArgs[0], args?: FetchArgs[1]) {
  const res = await fetch(url, args)

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  const json: T = await res.json()

  return json
}
