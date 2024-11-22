import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AnimalIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="M23 0a5.9 5.9 0 0 0-5.6 3.782A21.868 21.868 0 0 0 12 3c-1.826.034-3.64.297-5.4.782A5.9 5.9 0 0 0 1 0H0v11.929a5.959 5.959 0 0 0 1.757 4.242l6.95 6.95a2.978 2.978 0 0 0 2.122.879h2.343a2.978 2.978 0 0 0 2.121-.879l6.949-6.949A5.958 5.958 0 0 0 24 11.929V0h-1ZM9 20.586l-5.829-5.829A3.974 3.974 0 0 1 2 11.929v-1.714c.688.178 1.357.42 2 .722a3.808 3.808 0 0 0 3.624 3.05A8.917 8.917 0 0 1 9 19v1.586Zm13-8.657a3.968 3.968 0 0 1-1.172 2.828L15 20.586V19a8.917 8.917 0 0 1 1.376-5.013A3.808 3.808 0 0 0 20 10.937a11.355 11.355 0 0 1 2-.722v1.714Zm0-3.756c-2.431.559-9 2.815-9 10.827v1h-2v-1c0-8.013-6.569-10.268-9-10.827V2.109a4.325 4.325 0 0 1 3.051 3.207l.317.948.947-.315A20.924 20.924 0 0 1 12 5c1.93.053 3.843.372 5.685.949l.948.315.315-.948A4.328 4.328 0 0 1 22 2.109v6.064Z"
    />
  </Svg>
)
export default AnimalIcon
