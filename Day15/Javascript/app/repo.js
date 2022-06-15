let repo = {
    name: 'practicasJS',
    author: 'Ulises Ornelas',
    language: 'Javascript',
    numberOfCommits: 123,
    stars: 32,
    issues_open: 2,
    issues_close: 2,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getInfo: function () {
        return `El repo ${this.name} es de ${this.author}`        
    }

}