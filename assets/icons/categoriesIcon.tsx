import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const CategoriesIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#374957" clipPath="url(#a)">
      <Path d="M4.5 17.5H2a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5H2v-2.5h2.5V22ZM22 17.5h-2.5a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5H22V22ZM4.5 8.75H2a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5H2v-2.5h2.5v2.5ZM22 8.75h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5H22v2.5ZM4.5 0H2a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5H2V2h2.5v2.5ZM13.25 17.5h-2.5a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5h2.5V22ZM13.25 8.75h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5h2.5v2.5ZM13.25 0h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5h-2.5V2h2.5v2.5ZM22 0h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5h-2.5V2H22v2.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CategoriesIcon
