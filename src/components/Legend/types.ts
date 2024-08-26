export type LegendProps = {
  segments: Segment[];
  rings: Ring[];
  elements: Element[];
};

export type Segment = { label: string; slug: string; color: string };

export type Ring = { label: string; slug: string };

export type Element = { label: string; segment: string; ring: string };
