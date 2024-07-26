// Helper function to group elements by segment and ring
export const groupElements = (elements, segments, rings) => {
  const grouped = {};

  // Initialize the grouped object with segments and rings
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
