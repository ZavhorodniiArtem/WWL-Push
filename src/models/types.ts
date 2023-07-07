export type SegmentValues = {
  count?: string
  moreOrLess?: string
  registration?: string
  isDeposit?: string
}

export interface ISegment {
  id: string
  type?: string
  values?: SegmentValues
}
