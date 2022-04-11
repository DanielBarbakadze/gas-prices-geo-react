import { SVGAttributes } from "react";

type SvgProps = SVGAttributes<SVGElement> & {
  size?: number;
};

type PathProps = SVGAttributes<SVGPathElement> & {
  color?: string;
};

export type IconProps = SvgProps & {
  color?: string;
};

const SvgIcon = ({
  children,
  size = 24,
  viewBox = "0 0 20 20",
  ...rest
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={viewBox}
    {...rest}
  >
    {children}
  </svg>
);

const Path = ({ fill, ...rest }: PathProps) => (
  <path {...rest} fill={fill || "currentColor"} />
);

// const Rect = ({ fill, ...rest }: PathProps) => (
//   <rect {...rest} fill={fill || "currentColor"} />
// );

export const IconWarningTest = ({ color, ...rest }: IconProps) => (
  <SvgIcon {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2768 18.4922H3.72318C1.41971 18.4922 -0.0243943 16.0037 1.11845 14.0038L7.39527 3.01933C8.54695 1.00389 11.453 1.00389 12.6047 3.01933L18.8815 14.0038C20.0244 16.0037 18.5803 18.4922 16.2768 18.4922ZM10.8682 4.01161C10.4843 3.3398 9.51565 3.3398 9.13175 4.01161L2.85493 14.996C2.47399 15.6627 2.95535 16.4922 3.72318 16.4922H16.2768C17.0446 16.4922 17.526 15.6627 17.1451 14.996L10.8682 4.01161ZM9 11.7224C9 11.9985 9.22386 12.2224 9.5 12.2224H10.5C10.7761 12.2224 11 11.9985 11 11.7224V7.72235C11 7.44621 10.7761 7.22235 10.5 7.22235H9.5C9.22386 7.22235 9 7.44621 9 7.72235V11.7224ZM9.5 15.2224C9.22386 15.2224 9 14.9985 9 14.7224V13.7224C9 13.4462 9.22386 13.2224 9.5 13.2224H10.5C10.7761 13.2224 11 13.4462 11 13.7224V14.7224C11 14.9985 10.7761 15.2224 10.5 15.2224H9.5Z"
      fill={color}
    />
  </SvgIcon>
);

export const IconHome = ({ color, ...rest }: IconProps) => (
  <SvgIcon viewBox="0 0 32 32" {...rest}>
    <Path
      d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"
      fill={color}
    />
  </SvgIcon>
);

export const IconExclamationTriangle = ({ color, ...rest }: IconProps) => (
  <SvgIcon {...rest}>
    <Path
      d="M 16 3.21875 L 15.125 4.71875 L 3.125 25.5 L 2.28125 27 L 29.71875 27 L 28.875 25.5 L 16.875 4.71875 Z M 16 7.21875 L 26.25 25 L 5.75 25 Z M 15 14 L 15 20 L 17 20 L 17 14 Z M 15 21 L 15 23 L 17 23 L 17 21 Z"
      fill={color}
    />
  </SvgIcon>
);

export const IconChartPie = ({ color, ...rest }: IconProps) => (
  <SvgIcon viewBox="0 0 32 32" {...rest}>
    <Path
      d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 14.875 5.0625 C 14.917969 5.058594 14.957031 5.066406 15 5.0625 L 15 16.40625 L 15.28125 16.71875 L 23.0625 24.46875 C 21.15625 26.0625 18.6875 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 10.292969 9.320313 5.625 14.875 5.0625 Z M 17 5.0625 C 22.285156 5.539063 26.460938 9.714844 26.9375 15 L 17 15 Z M 18.4375 17 L 26.9375 17 C 26.730469 19.292969 25.863281 21.394531 24.46875 23.0625 Z"
      fill={color}
    />
  </SvgIcon>
);

export const IconGasPump = ({ color, ...rest }: IconProps) => (
  <SvgIcon viewBox="0 0 32 32" {...rest}>
    <Path
      d="M 8 5 C 6.355469 5 5 6.355469 5 8 L 5 27 L 19 27 L 19 20 L 21 20 L 21 24 C 21 25.644531 22.355469 27 24 27 C 25.644531 27 27 25.644531 27 24 L 27 13.8125 C 27 13.015625 26.6875 12.28125 26.125 11.71875 L 21.40625 7 L 20 8.40625 L 22.84375 11.25 C 21.769531 11.707031 21 12.765625 21 14 C 21 15.644531 22.355469 17 24 17 C 24.351563 17 24.683594 16.925781 25 16.8125 L 25 24 C 25 24.566406 24.566406 25 24 25 C 23.433594 25 23 24.566406 23 24 L 23 20 C 23 18.90625 22.09375 18 21 18 L 19 18 L 19 8 C 19 6.355469 17.644531 5 16 5 Z M 8 7 L 16 7 C 16.566406 7 17 7.433594 17 8 L 17 12 L 7 12 L 7 8 C 7 7.433594 7.433594 7 8 7 Z M 24 13 C 24.5625 13 25 13.4375 25 14 C 25 14.5625 24.5625 15 24 15 C 23.4375 15 23 14.5625 23 14 C 23 13.4375 23.4375 13 24 13 Z M 7 14 L 17 14 L 17 25 L 7 25 Z"
      fill={color}
    />
  </SvgIcon>
);

export const IconBars = ({ color, ...rest }: IconProps) => (
  <SvgIcon viewBox="0 0 32 32" {...rest}>
    <Path
      d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"
      fill={color}
    />
  </SvgIcon>
);
