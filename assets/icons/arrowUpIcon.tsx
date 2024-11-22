import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowUpIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    scale={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#374957"
      d="m22.586 12.148-9.879-9.88a1.021 1.021 0 0 0-1.414 0L1.42 12.143.006 10.728 9.88.855a3.073 3.073 0 0 1 4.243 0L24 10.734l-1.414 1.414Z"
    />
  </Svg>
)
export default ArrowUpIcon
