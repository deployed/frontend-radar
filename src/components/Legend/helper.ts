type segments = { label: string; slug: string; color: string }[];
type rings = { label: string; slug: string }[];
type elements = { label: string; segment: string; ring: string }[];

type GroupedElements = {
  [segmentSlug: string]: {
    label: string;
    color: string;
    rings: {
      [ringSlug: string]: {
        label: string;
        elements: { label: string; index: number }[];
      };
    };
  };
};

export const groupElements = (
  elements: elements,
  segments: segments,
  rings: rings
): GroupedElements => {
  const grouped: GroupedElements = {};

  segments.forEach((segment) => {
    grouped[segment.slug] = {
      label: segment.label,
      color: segment.color,
      rings: {},
    };

    rings.forEach((ring) => {
      grouped[segment.slug].rings[ring.slug] = {
        label: ring.label,
        elements: [],
      };
    });
  });

  // Group elements by segment and ring
  elements.forEach((element, index) => {
    const segment = grouped[element.segment];
    if (segment) {
      const ring = segment.rings[element.ring];
      if (ring) {
        ring.elements.push({ label: element.label, index: index });
      }
    }
  });

  return grouped;
};
