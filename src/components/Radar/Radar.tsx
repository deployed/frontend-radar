import React, {useEffect, useRef, useState} from 'react';

import {Tooltip} from 'react-tooltip';

import {useTechContext} from '../../context/Context';
import RadarDiagram from '../../radar-diagram/radar';
import {radarStyles} from '../../styles';
import {RadarProps} from '../types';

const padding = 50;

const Radar = ({segments, rings, elements}: RadarProps) => {
  let svgRef = useRef(null);

  const [radarDiagram, setRadarDiagram] = useState(new RadarDiagram({elements, rings, segments}));
  const {techClicked, setTechClicked} = useTechContext();

  useEffect(() => {
    const radar = new RadarDiagram({elements, rings, segments});
    setRadarDiagram(radar);
  }, [segments, rings, elements]);

  return (
    <div className={radarStyles.radarContainer}>
      <svg
        id="radar-plot"
        viewBox={`${-padding} ${-padding} ${
          radarDiagram.options.baseDimension + 2 * padding
        } ${radarDiagram.options.baseDimension + 2 * padding}`}
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}>
        <circle
          r={radarDiagram.options.baseDimension / 2}
          cx={radarDiagram.options.baseDimension / 2}
          cy={radarDiagram.options.baseDimension / 2}
          fill="#b5c5df"></circle>
        {radarDiagram.ringAxes.map((ringAxis, index) => (
          <g key={ringAxis.slug}>
            <circle
              className={radarStyles.ringCircle}
              cx={radarDiagram.options.baseDimension / 2}
              cy={radarDiagram.options.baseDimension / 2}
              r={ringAxis.j}
              stroke="#aaa"
              strokeWidth={1}
              fill="#f1f4f9"
              fillOpacity={0.3}></circle>
            <text
              fontSize={'30px'}
              text-anchor="middle"
              fill="black"
              x={radarDiagram.options.baseDimension / 2}
              y={radarDiagram.options.baseDimension / 2 - ringAxis.j + 60}
              dy="-0.5em">
              {rings[index].slug}
            </text>
          </g>
        ))}
        {radarDiagram.segmentAxes.map((segAxis, idx) => (
          <g
            key={segAxis.slug}
            transform={`rotate(${
              (-idx * radarDiagram.options.totalAngle * 180) /
              (Math.PI * radarDiagram.segments.length)
            } ${radarDiagram.options.baseDimension / 2} ${radarDiagram.options.baseDimension / 2})`}>
            <line
              className={radarStyles.segmentAxis}
              x1={segAxis.axis.x1}
              x2={segAxis.axis.x2}
              y1={segAxis.axis.y1}
              y2={segAxis.axis.y2}
              stroke="#aaa"
              strokeWidth={1}></line>

            <path
              className={radarStyles.segmentPath}
              id={`label-path-${segAxis.slug}`}
              d={radarDiagram.getSegmentLabelPathBase()}
              fill="none"
              stroke={segAxis.color}
              strokeWidth={15}></path>

            <text>
              <textPath
                href={`#label-path-${segAxis.slug}`}
                fill="#555"
                fontWeight="800"
                fontSize={`${radarDiagram.options.totalAngle / 3 + 0.5}em`}
                fontFamily="Sans-serif"
                startOffset="50%"
                textAnchor="middle">
                {segAxis.label}
              </textPath>
            </text>
          </g>
        ))}

        {radarDiagram.dots.map((dot, index) => {
          const getRandomOffset = (range: number) => (Math.random() - 0.5) * 2 * range;

          const range = 10;

          const x = dot.x + getRandomOffset(range);
          const y = dot.y + getRandomOffset(range);

          return (
            <g
              onMouseEnter={() => setTechClicked(index)}
              onClick={() => window.open(dot.link)}
              key={dot.label}
              data-tooltip-id={`my-tooltip-${index}`}
              className={radarStyles.dotContainer}
              style={{transform: `translate(${x}px, ${y}px)`}}>
              <circle className={radarStyles.dotCircle} r={15} fill={dot.color}></circle>

              <text y={-10} x={-1} textAnchor="middle" className={radarStyles.dotLabel}>
                {index + 1}
              </text>
            </g>
          );
        })}
      </svg>
      <Tooltip
        style={{fontSize: '12px'}}
        id={`my-tooltip-${techClicked}`}
        content={techClicked >= 0 ? elements[techClicked].label : undefined}
        isOpen={techClicked >= 0 ? true : false}
      />
    </div>
  );
};

export default Radar;
