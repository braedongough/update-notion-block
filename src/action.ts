import { Client } from "@notionhq/client"
import { UpdateBlockParameters } from "@notionhq/client/build/src/api-endpoints"

interface Config {
  notionToken: string
  blockId: string
  data: Omit<UpdateBlockParameters, "block_id">
}

export async function run(config: Config) {
  const notion = new Client({
    auth: config.notionToken,
  })

  await notion.blocks.update({
    block_id: config.blockId,
    ...config.data,
  })
}
