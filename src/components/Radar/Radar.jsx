import { useEffect, useRef, useState } from "react";
import RadarDiagram from "radar-diagram";
import "./radar.css";
import { Tooltip } from "react-tooltip";
const padding = 50;

const Radar = ({
  options,
  segments,
  rings,
  elements,
  techClicked,
  setTechClicked,
}) => {
  let svgRef = useRef(null);
  const [radarDiagram, setRadarDiagram] = useState(
    new RadarDiagram(options, { elements, rings, segments })
  );

  useEffect(() => {
    const radar = new RadarDiagram(options, { elements, rings, segments });
    setRadarDiagram(radar);
  }, [options, segments, rings, elements]);

  console.log(techClicked);

  return (
    <div className="radar-container" style={{ height: "60vw" }}>
      <svg
        id="radar-plot"
        viewBox={`${-padding} ${-padding} ${
          radarDiagram.options.baseDimension + 2 * padding
        } ${radarDiagram.options.baseDimension + 2 * padding}`}
        xmlns="http://www.w3.org/2000/svg"
        ref={(el) => (svgRef = el)}
      >
        <circle
          r={radarDiagram.options.baseDimension / 2}
          cx={radarDiagram.options.baseDimension / 2}
          cy={radarDiagram.options.baseDimension / 2}
          fill="#8dc0f7"
        ></circle>
        {radarDiagram.ringAxes.map((ringAxis, index) => (
          <g key={ringAxis.slug}>
            <circle
              className="radar__ring"
              cx={radarDiagram.options.baseDimension / 2}
              cy={radarDiagram.options.baseDimension / 2}
              r={ringAxis.j}
              stroke="#aaa"
              strokeWidth={1}
              fill="#fff"
              fillOpacity={0.3}
            ></circle>
            <text
              fontSize={"30px"}
              text-anchor="middle"
              fill="#555"
              x={radarDiagram.options.baseDimension / 2}
              y={radarDiagram.options.baseDimension / 2 - ringAxis.j + 60}
              dy="-0.5em"
            >
              {rings[index].slug}
            </text>
          </g>
        ))}
        {radarDiagram.segmentAxes.map((segAxis, idx) => (
          <g key={segAxis.slug}>
            <line
              className="radar__segment-axis"
              x1={segAxis.axis.x1}
              x2={segAxis.axis.x2}
              y1={segAxis.axis.y1}
              y2={segAxis.axis.y2}
              stroke={"#aaa"}
              strokeWidth={1}
            ></line>

            <path
              className="radar__segment__path"
              id={"label-path-" + segAxis.slug}
              d={radarDiagram.getSegmentLabelPathBase()}
              fill={"none"}
              stroke={segAxis.color}
              strokeWidth={15}
              style={{
                transform: `rotate(${
                  (-idx * radarDiagram.options.totalAngle) /
                  radarDiagram.segments.length
                }rad)`,
              }}
            ></path>

            <text>
              <textPath
                href={`#label-path-${segAxis.slug}`}
                fill={"#555"}
                fontWeight={"800"}
                fontSize={`${radarDiagram.options.totalAngle / 3 + 0.5}em`}
                fontFamily={"Sans-serif"}
                startOffset={"50%"}
                textAnchor={"middle"}
              >
                {segAxis.label}
              </textPath>
            </text>
          </g>
        ))}

        {radarDiagram.dots.map((dot, index) => {
          const getRandomOffset = (range) => (Math.random() - 0.5) * 2 * range;

          const range = 10;

          const x = dot.x + getRandomOffset(range);
          const y = dot.y + getRandomOffset(range);

          return (
            <g
              onMouseEnter={() => setTechClicked(index)}
              key={dot.label}
              data-tooltip-id={`my-tooltip-${index}`}
              className="radar__dot"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <circle
                className="dot"
                r={15}
                stroke={"#aaa"}
                strokeWidth={1}
                fill={dot.color}
              ></circle>

              <text
                y={-10}
                x={-1}
                textAnchor="middle"
                className="radar__dot__label"
              >
                {index}
              </text>
            </g>
          );
        })}
      </svg>
      <Tooltip
        style={{ fontSize: "8px" }}
        id={`my-tooltip-${techClicked}`}
        content={elements[techClicked].label}
        isOpen={true}
      />
    </div>
  );
};

export default Radar;
