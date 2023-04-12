import { CreateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'
import { GitAPIProvider } from '../api-provider/GitAPIProvider'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

class IssueAPIProvider extends GitAPIProvider {
    public create<T>(owner: string, repo: string, data: CreateIssueRequest): Promise<AxiosResponse<T>> {    //CreateIssueRequest объект тоже должны преставить как строку json
        const config: AxiosRequestConfig = GitAPIProvider.configureRequest(
            `/repos/{owner}/{repo}/issues`,
            'POST',
            this.headers,
            JSON.stringify(data),
        )
        return this.sendRequest(config)  //sendRequest - ассинхронная возвращает promise 
    }
}

export {
    IssueAPIProvider,
}

// в сервисе - успешное завершение запроса, а для тестирования нужны и 300, 400 и тд
// поэтому в файлах в API - методы provider/ Сервисы - только для подготовки к тесту.
// нужен еще и service метод - для проверки 200 кодов 