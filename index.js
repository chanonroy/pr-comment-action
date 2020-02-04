const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const message = core.getInput('message');
    const githubToken = core.getInput('GITHUB_TOKEN');

    const context = github.context;
    if (context.payload.pull_request == null) {
        core.setFailed('No PR found.');
        return;
    }
    const pullRequestNumber = context.payload.pull_request.number;

    const octokit = new github.GitHub(githubToken);
    octokit.issues.createComment({
        ...context.repo,
        issue_number: pullRequestNumber,
        body: message
      });

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
