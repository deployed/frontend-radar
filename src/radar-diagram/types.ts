export type OptionsProps = {
  minPlotRadius: number;
  padding: number;
  totalAngle: number;
};
export type Ring = {label: string; slug: string};

export type Segment = {
  color: string;
  label: string;
  slug: string;
};

export type Element = {
  label: string;
  segment: string;
  ring: string;
};

export interface MetaData {
  segmentCounts: Record<string, number>;
  ringCounts: Record<string, number>;
  countMatrix: Record<string, number>;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface Axis {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  labelPath: string;
}

export type Options = {
  totalAngle: number;
  baseDimension: number;
  padding: number;
  minPlotRadius: number;
} & OptionsProps;

export type RadarProps = {
  elements: Element[];
  rings: Ring[];
  segments: Segment[];
};
