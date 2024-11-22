import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDownIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="m22.586.929-9.879 9.879a1.021 1.021 0 0 1-1.414 0L1.42.934.006 2.348l9.873 9.874a3.075 3.075 0 0 0 4.243 0L24 2.343 22.586.929Z"
    />
  </Svg>
)
export default ArrowDownIcon
