export function setDataToLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function getDataFromLocalStorage(key: string): string| '' {
  return localStorage.getItem(key)! || '';
}
