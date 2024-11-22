import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WorldIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm10 12c0 1.95-.572 3.856-1.646 5.482A5.288 5.288 0 0 1 19 13.99V12h-6a1 1 0 0 1-1-1v-1h3V6h2.914l1.109-1.109A9.969 9.969 0 0 1 22 12Zm-19.951.963L6.086 17H10a1 1 0 0 1 1 1v3.949a10.016 10.016 0 0 1-8.951-8.986ZM13 21.949V18a3 3 0 0 0-3-3H6.914l-4.751-4.751A9.978 9.978 0 0 1 17.456 3.63l-.37.37H13v4h-3v3a3 3 0 0 0 3 3h4a7.2 7.2 0 0 0 2.072 5.063A9.97 9.97 0 0 1 13 21.949Z"
    />
  </Svg>
)
export default WorldIcon
