class Vote {
    static totalVotes = 0;
    static availableVotes = 100;

    constructor(votes = 0) {
        this.votes = votes;
        // Update static variables when initializing with a starting vote value
        Vote.totalVotes += this.votes;
        Vote.availableVotes -= this.votes;
    }

    getVote() {
        return this.votes;
    }

    setVote(votes) {
        this.votes = votes;
    }

    addVote() {
        this.votes++;
        Vote.totalVotes++;
        Vote.availableVotes--;
    }

    updateVote(votes) {
        this.votes += votes;
        Vote.totalVotes += votes;
        Vote.availableVotes -= votes;
    }

    toString() {
        let outputString = `Available Votes: ${Vote.availableVotes}
Total Votes: ${Vote.totalVotes}
Your Votes: ${this.votes}
`;
        return outputString;
    }
}

// Create the first candidate with 10 initial votes
let candidateA = new Vote(10);  // Initial votes for candidateA are 10
let candidateB = new Vote();    // Initial votes for candidateB are 0
let candidateC = new Vote();    // Initial votes for candidateC are 0

// Add votes for candidateA (5 times)
candidateA.addVote();  // candidateA: 10 + 1 = 11
candidateA.addVote();  // candidateA: 11 + 1 = 12
candidateA.addVote();  // candidateA: 12 + 1 = 13
candidateA.addVote();  // candidateA: 13 + 1 = 14
candidateA.addVote();  // candidateA: 14 + 1 = 15

// Add votes for candidateB (3 times)
candidateB.addVote();  // candidateB: 0 + 1 = 1
candidateB.addVote();  // candidateB: 1 + 1 = 2
candidateB.addVote();  // candidateB: 2 + 1 = 3

// Add votes for candidateC (4 times)
candidateC.addVote();  // candidateC: 0 + 1 = 1
candidateC.addVote();  // candidateC: 1 + 1 = 2
candidateC.addVote();  // candidateC: 2 + 1 = 3
candidateC.addVote();  // candidateC: 3 + 1 = 4

// Update votes for candidateC (add 6 votes)
candidateC.updateVote(6);  // candidateC: 4 + 6 = 10

console.log(candidateA.toString());
