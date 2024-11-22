import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoviesIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="M22 0v3h-2V0H4v3H2V0H0v24h2v-3h2v3h16v-3h2v3h2V0h-2Zm0 5v2h-2V5h2Zm-2 8h2v2h-2v-2Zm0-2V9h2v2h-2Zm-2-9v9H6V2h12ZM2 11V9h2v2H2Zm2 2v2H2v-2h2Zm0-8v2H2V5h2ZM2 19v-2h2v2H2Zm4 3v-9h12v9H6Zm14-3v-2h2v2h-2Z"
    />
  </Svg>
)
export default MoviesIcon
