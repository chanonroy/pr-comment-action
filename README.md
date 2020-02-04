# Comment on PR Github Action

GitHub action to leave a comment on a pull request.

## Inputs

### `message`

(required) Message to be posted in the pull request

### `GITHUB_TOKEN`

(required) GitHub token

## Example Usage 

```
on: pull_request

jobs:
  example_comment_pr:
    runs-on: ubuntu-latest
    name: An example job to comment a PR
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Comment PR
        uses: chanonroy/pr-comment-action@master
        with:
          message: 'Example of message !'
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
