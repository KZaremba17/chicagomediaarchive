// components/NotionPageHeader.tsx
// CMA: Remove the Notion header strip (breadcrumbs + search + nav) completely.

import * as React from 'react'
import type * as types from 'notion-types'

export function NotionPageHeader(
  _props: { block: types.CollectionViewPageBlock | types.PageBlock }
) {
  return null
}

export default NotionPageHeader
