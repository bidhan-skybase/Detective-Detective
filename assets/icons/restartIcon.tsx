import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const RestartIcon = (props: SvgProps) => (
  <Svg

    width={26}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="M4.97 8.663a10.03 10.03 0 1 1-.118 8.371l2.922 1.1a1 1 0 0 0 .705-1.871l-3.877-1.46a1.858 1.858 0 0 0-2.392 1.083L.75 19.763a1 1 0 0 0 .583 1.288 1 1 0 0 0 1.288-.583l.732-1.945a11.985 11.985 0 1 0-.164-10.77 1.007 1.007 0 0 0 1.256 1.384.982.982 0 0 0 .525-.474Z"
    />
  </Svg>
)
export default RestartIcon
