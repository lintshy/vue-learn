import { Axios, type AxiosRequestConfig } from 'axios'

export class HttpClient {
  private baseUrl: string
  private httpInstance: Axios
  constructor(baseUrl: string, config: AxiosRequestConfig) {
    this.baseUrl = baseUrl
    this.httpInstance = new Axios({ ...config })
  }
  public async get(url: string) {
    return this.httpInstance.get(this.baseUrl).then(response => JSON.parse(response.data))
  }
  public async post(url: string, data: any) {
    return this.httpInstance.post(this.baseUrl, data).then(response => JSON.parse(response.data))
  }
  public async mock(data: any) {
    return Promise.resolve(data)
  }
}


const headers = {
  "content-type": "application/json",
  "accept": "application/json"
};

export const Api = new HttpClient('http://localhost:4000/graphql', {
  url: 'http://localhost:4000/graphql',
  headers,
})
