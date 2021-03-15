import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export function HomeIcon(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" stroke={props.color} />
    </Svg>
  );
}

export function SearchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M9.5 3A6.5 6.5 0 0116 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"
        stroke={props.color}
      />
    </Svg>
  );
}

export function SearchBoldIcon(props) {
  return (
    <Svg
      data-icon="search"
      className="prefix__svg-inline--fa prefix__fa-search prefix__fa-w-16"
      width={props.size}
      height={props.size}
      viewBox="0 0 512 512"
      {...props}>
      <Path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
      />
    </Svg>
  );
}

export function FavouriteIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        stroke={props.color}
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
      />
    </Svg>
  );
}

export function ProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        stroke={props.color}
        d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"
      />
    </Svg>
  );
}

export function PlusIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}>
      <Path stroke={props.color} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Svg>
  );
}

export function MenuIcon(props) {
  return (
    // <Svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={props.size}
    //   height={props.size}
    //   viewBox="0 0 24 24"
    //   {...props}>
    //   <Path
    //     stroke={props.color}
    //     d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"
    //   />
    // </Svg>
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 448 512"
      {...props}>
      <Path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </Svg>
  );
}

export function BackIcon(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 320 512"
      {...props}>
      <Path
        fill="currentColor"
        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
      />
    </Svg>
  );
}

// export function PenIcon(props) {
//   return (
//     <Svg
//       aria-hidden="true"
//       data-prefix="fas"
//       data-icon="pen"
//       className="prefix__svg-inline--fa prefix__fa-pen prefix__fa-w-16"
//       height={props.height}
//       width={props.width}
//       viewBox="0 0 512 512"
//       {...props}>
//       <Path
//         fill="currentColor"
//         d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
//       />
//     </Svg>
//   );
// }
