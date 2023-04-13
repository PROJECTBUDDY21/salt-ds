// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CHProps = CountrySymbolProps;

const CH = forwardRef<SVGSVGElement, CHProps>(function CH(props: CHProps, ref) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="CH"
      aria-label="Switzerland"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-CH-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="rotate(-90 36 36)"
        />
      </mask>
      <g mask={`url(#${uid}-CH-a)`}>
        <path fill="#DD2033" d="M0 0h72v72H0z" />
        <path
          fill="#F5F7F8"
          d="M59.6 43V29h-17V12h-14v17h-17v14h17v17h14V43h17Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default CH;