import * as core from "@actions/core"
import { run } from "./action"

const INPUTS = {
  NOTION_TOKEN: "notion_token",
  BLOCK_ID: "block_id",
  DATA: "data",
}

async function main() {
  try {
    const notionToken = core.getInput(INPUTS.NOTION_TOKEN, { required: true })
    const blockId = core.getInput(INPUTS.BLOCK_ID, { required: true })
    const data = JSON.parse(core.getInput(INPUTS.DATA, { required: true })) // TODO cast a type

    const config = {
      notionToken,
      blockId,
      data,
    }

    await run(config)
  } catch (e) {
    core.setFailed(e instanceof Error ? e.message : e + "")
  }
}

;(async () => {
  await main()
})()
