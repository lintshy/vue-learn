import { Axios, type AxiosRequestConfig } from 'axios'

export class HttpClient {
  private baseUrl: string
  private httpInstance: Axios
  constructor(baseUrl: string, config: AxiosRequestConfig) {
    this.baseUrl = baseUrl
    this.httpInstance = new Axios({ ...config })
  }
  public async get(url: string) {
    return this.httpInstance.get(url)
  }
  public async mock(data: any) {
    return Promise.resolve(data)
  }
}

export const Api = new HttpClient('TBD', { url: 'TBD' })
