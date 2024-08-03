import React from 'react';

class TreeMap extends React.Component {
  calculatePositions(data, width, height) {
    const totalValue = data.reduce((sum, item) => sum + item.value, 0);
    let x = 0;
    let y = 0;
    const rectangles = [];

    const squareSize = Math.sqrt((width * height) / totalValue);

    data.forEach((item) => {
      const squareSide = squareSize * Math.sqrt(item.value);
      if (x + squareSide > width) {
        x = 0;
        y += squareSide;
      }
      rectangles.push({ ...item, x, y, width: squareSide, height: squareSide });
      x += squareSide;
    });

    return rectangles;
  }

  render() {
    const { data, width, height } = this.props;
    const rectangles = this.calculatePositions(data, width, height);

    return (
      <svg width={width} height={height}>
        {rectangles.map((rect, index) => (
          <g key={index}>
            <rect
              x={rect.x}
              y={rect.y}
              width={rect.width}
              height={rect.height}
              fill="#8884d8"
              stroke="#fff"
            />
            <text
              x={rect.x + rect.width / 2}
              y={rect.y + rect.height / 2}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="#fff"
              fontSize="10"
            >
              {rect.name}
            </text>
          </g>
        ))}
      </svg>
    );
  }
}

export default TreeMap;
