import capitalize from '~/utils/capitalize'
import * as blockComponents from '~/blocks'
import {

  HeroBlockQueryResult,

} from './blocks'
import * as blocksImport from './blocks'

// block types in Sanity are named like: heroBlock
// block queries in app are named like: heroBlockQuery
// block names in app are named like: Hero
const blocks = (Object.entries(blocksImport) as Array<[keyof typeof blocksImport, string]>).map(
  ([queryName, queryValue]) => ({
    queryName,
    queryValue,
    blockType: queryName.replace('Query', ''),
    blockName: capitalize(queryName.replace('BlockQuery', '')),
  }),
)

// this list is used to only query children block in blocks that require it
const BLOCKS_WITH_CHILDREN = ['contentScrollerBlock']

export interface CommonBlockProps<T> {
  name?: keyof typeof blockComponents
  props?: T & { id?: string; children?: BlocksQueryResult[] }
}

export type BlocksQueryResult =
  | CommonBlockProps<HeroBlockQueryResult>

const blockNameQuery = `'name': select(
  ${blocks.map(({ blockType, blockName }) => `_type == '${blockType}' => '${blockName}'`).join(',')}
)`

// we need to map the block queries to construct a conditional query for each block type
export default `
  ${blockNameQuery},
  'props': {
    id,
    ${blocks
    .map(
      ({ blockType, queryValue }) => `
          _type == '${blockType}' => {
            ${queryValue},
            ${BLOCKS_WITH_CHILDREN.includes(blockType)
          ? `
              children[]{
                ${blockNameQuery},
                'props': {
                  id,
                  ${blocks.map(
            ({ blockType: childBlockType, queryValue: childQueryValue }) => `
                    _type == '${childBlockType}' => {
                      ${childQueryValue}
                    }
                  `,
          )}
                }
              }
            `
          : ''
        }
          }
        `,
    )
    .join(',')}
  }
`
