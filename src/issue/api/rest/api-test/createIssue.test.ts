import { createIssueModel, IssueModel } from '../../../../model/issueModel'
import { createIssueData } from '../../../../data/issue.data'
import { IssueAPIProvider } from '../../../../common/api/api-provider/IssueAPIProvider'
import { LOGIN, REPO } from '../../../../../credential'
import { AxiosResponse } from 'axios'
import { CreateIssueResponse } from '../../../../common/api/api-service/IssueAPIService'

const fetch = require('node-fetch')

describe('POST /repos/{owner}/{repo}/issues', () => {
    let issue: IssueModel

    beforeEach(async () => {
        issue = createIssueModel(createIssueData())
    })

    it('issue should be created', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.create(
            LOGIN,
            REPO,
            {
                title: issue.title,
            },
        )

        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual(issue.state)

        const responseUrl: Response = await fetch(response.data.html_url)

        expect(responseUrl.status).toEqual(200)
    })
})
