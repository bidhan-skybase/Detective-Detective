import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="M20.4 5.051A3 3 0 0 0 17.559 3h-.839l-.32-.949A3 3 0 0 0 13.559 0h-3.118A2.994 2.994 0 0 0 7.6 2.052L7.28 3h-.839A3 3 0 0 0 3.6 5.051L2.28 9H0v2h1.613l-.561 1.684.048.016A2.982 2.982 0 0 0 0 15v5h2v4h6v-4h8v4h6v-4h2v-5a2.982 2.982 0 0 0-1.1-2.3l.046-.015L22.387 11H24V9h-2.28L20.4 5.051ZM9.492 2.684A1 1 0 0 1 10.441 2h3.118a1 1 0 0 1 .949.684l.105.316H9.387l.105-.316Zm-4 3A1 1 0 0 1 6.441 5h11.118a1 1 0 0 1 .949.684L20.613 12H3.387l2.105-6.316ZM6 22H4v-2h2v2Zm14 0h-2v-2h2v2Zm2-4H2v-3a1 1 0 0 1 1-1h1v1a1 1 0 1 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v3Z"
    />
  </Svg>
)
export default SvgComponent
