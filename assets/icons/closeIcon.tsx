import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CloseIcon = (props: SvgProps) => (
  <Svg
    width={22}
    height={24}
viewBox='0 0 24 24'
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293A1 1 0 0 0 .293 1.707L10.586 12 .293 22.293a1 1 0 0 0 1.414 1.414L12 13.414l10.293 10.293a1 1 0 0 0 1.414-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
    />
  </Svg>
)
export default CloseIcon
