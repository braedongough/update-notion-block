# Update Notion Block Action

A Github action for updating a block in notion.

## Getting Started

1. [Create a new internal Notion integration](https://www.notion.so/my-integrations) and store the API token as a secret in Github for your workflow.
2. In the Notion page of the block you'll be updating, connect your newly created integration in the via the page settings.
3. Copy the link to block to find the block id. Using the following link as an example, the block id would be the value after the #:
   ```
   https://www.notion.so/workspacename/Page-to-Update-with-API-eaf76050asdd944506e5da7fa9?pvs=4#1cd2c86a1a2042668dcbdd531d065b87
   ```

### Usage

```yaml
name: Update notion block

on: workflow_dispatch

jobs:
  notion_job:
    runs-on: ubuntu-latest
    name: Update notion block
    steps:
      - name: Update Notion Block from Github
        uses: braedongough/update-notion-block
        with:
          notion_token: ${{ secrets.NOTION_TOKEN }}
          block_id: 1cd2c86a1a2042668dcbdd531d065b87
          data: |
          '{"type": "heading_1", "heading_1": {"rich_text": [{"text": {"content": "UPDATE BLOCK FROM ACTION"}, "annotations": {"color": "blue"}}]}}'

```

_note:_ The data type must be the same block type as the block you're updating.
