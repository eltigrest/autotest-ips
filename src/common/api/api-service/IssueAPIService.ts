// html url можно взять вручную

type CreateIssueResponse {
    id: number, 
    title: string, 
    state: string, 
    html_url: string,
}

export {
    CreateIssueResponse,
}