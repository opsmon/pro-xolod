export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="64" cy="64" r="58" fill="url(#brand-shell)" />
      <circle cx="64" cy="64" r="56" fill="url(#brand-base)" />
      <path
        d="M23 91c17 13 43 18 64 4 17-11 24-29 20-45-2 19-18 33-42 36-18 2-32 3-42 5Z"
        fill="url(#brand-lower)"
      />
      <path
        d="M18 38c12-20 34-30 56-28 18 2 30 12 31 26 1 14-12 26-35 34-22 8-38 17-47 31 3-21 17-39 43-53 16-9 25-18 23-27-2-7-11-12-24-12-17 0-34 9-47 29Z"
        fill="url(#brand-upper)"
      />
      <path
        d="M39 75c11-15 30-23 52-30 11-4 18-9 21-17 8 22-5 43-28 53-18 8-38 7-45-6Z"
        fill="url(#brand-wave)"
      />
      <path
        d="M36 82c9-15 29-24 55-32 11-4 18-9 21-17 2 8 1 16-3 23-21-7-43 0-66 22-3 3-5 4-7 4Z"
        fill="url(#brand-glow)"
        opacity=".9"
      />
      <path
        d="M79 11c13 4 24 13 30 25 7 13 7 27 2 40"
        stroke="white"
        strokeOpacity=".52"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 30c13-13 28-20 45-19"
        stroke="white"
        strokeOpacity=".62"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="45" cy="94" r="5" fill="white" fillOpacity=".92" />
      <circle cx="55" cy="88" r="3" fill="white" fillOpacity=".62" />
      <circle cx="64" cy="64" r="57" stroke="white" strokeOpacity=".7" strokeWidth="2" />
      <defs>
        <radialGradient id="brand-shell" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43 24) rotate(54) scale(96)">
          <stop stopColor="#fff7ff" />
          <stop offset=".34" stopColor="#ead2ec" />
          <stop offset=".72" stopColor="#7eefff" />
          <stop offset="1" stopColor="#2f2490" />
        </radialGradient>
        <radialGradient id="brand-base" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43 22) rotate(50) scale(98)">
          <stop stopColor="#f8e2f5" />
          <stop offset=".5" stopColor="#d8d0ff" />
          <stop offset="1" stopColor="#60dce8" />
        </radialGradient>
        <linearGradient id="brand-upper" x1="21" y1="15" x2="102" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ead2ec" />
          <stop offset=".52" stopColor="#d8d0ff" />
          <stop offset="1" stopColor="#f4def1" />
        </linearGradient>
        <linearGradient id="brand-lower" x1="22" y1="73" x2="110" y2="105" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ead2ec" />
          <stop offset=".55" stopColor="#d8d0ff" />
          <stop offset="1" stopColor="#f4def1" />
        </linearGradient>
        <linearGradient id="brand-wave" x1="40" y1="72" x2="111" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00c8d8" />
          <stop offset=".48" stopColor="#9cf7ff" />
          <stop offset="1" stopColor="#2f2490" />
        </linearGradient>
        <linearGradient id="brand-glow" x1="37" y1="79" x2="109" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00c8d8" stopOpacity=".96" />
          <stop offset=".5" stopColor="#c8fbff" stopOpacity=".86" />
          <stop offset="1" stopColor="#2f2490" stopOpacity=".9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
