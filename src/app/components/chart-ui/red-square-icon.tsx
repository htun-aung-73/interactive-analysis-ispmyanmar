export const RedSquareIcon = ({
  width = '10',
  height = '10',
  color = 'red',
}: {
  width?: string
  height?: string
  color?: string
}) => (
  <svg
    className={`w-[${width}] h-[${height}] mr-2 flex-shrink-0`}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height={height} fill={color} />
  </svg>
)
