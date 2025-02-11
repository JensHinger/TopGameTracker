export const URL = "http://localhost:8080"

export async function getCall<T>(path: string): Promise<T> {
    const response = await fetch(`${URL}/${path}`, {method: "GET"});

    if (!response.ok) {
        throw new Error(response.statusText, {});
    }
   
    return await response.json() as T;
}