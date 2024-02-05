export function getFromLocalStorage(key: string) {
    const dataString = localStorage.getItem(key);
  
    if (dataString) {
      try {
        return JSON.parse(dataString);
      } catch (error) {
        console.error(`Erro ao fazer parse do JSON para a chave ${key}:`, error);
      }
    }
  
    return null;
  }
  