class Issue {
    constructor(tittle, repository, status, commits) {
        this.tittle = tittle,
            this.repository = repository,
            this.status = status,
            this.commits = commits
    }
    get getTittleAutor() {
        return `el titulo es -${this.tittle}- y el status es ${this.status}`
    }
}

let cambio = new Issue('cambio de perro', 'de uli', true, 23)

console.log(cambio.getTittleAutor)