import { getItemAsync, setItemAsync } from 'expo-secure-store'

export async function get(key: string): Promise<string | null> {
  return await getItemAsync(key)
}

export async function set(key: string, value: string): Promise<void> {
  await setItemAsync(key, value)
}
