import fetch, { Response, RequestInit } from 'node-fetch'

type MethodProps = | 'GET' | "POST" | "PUT"

const BaseUrl = 'http://localhost:3001'

export const callApi = (url: string, method?: MethodProps): Promise<any> => {
  return new Promise(function (resolve, reject) {
    let options: RequestInit = {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`${BaseUrl}/${url}`, options)
      .then((res: Response) => {
        if (res.ok) return res.json();
        reject(new Error(res.statusText));
      })
      .then((data: any) => resolve(data))
      .catch(err => {
        reject(err);
      });
  });
};