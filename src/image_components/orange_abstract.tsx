import React from "react";
import "./orange_abstract.css";

export default function orange_abstract() {
  return (
    <React.Fragment>
      <h1>Hello Guys</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="gloopyOrange"
        fill="none"
        viewBox="-150 50 300 300"
      >
        <path id="solidObject" fill="url(#paint0_linear)">
          <animate
            attributeName="d"
            dur="120s"
            repeatCount="indefinite"
            // keyTimes="0;
            // 0.33;
            // 0.66;
            // 1"
            // keySplines="0.5, 0, 0.5, 1; 0.5, 0, 0.5, 1;"
            values="M 101 128
            C 80 106 21 136 28 81
            32 45 57 14 116 14
            175 14 236 -25 277 28
            305 64 262 122 183 202
            104 283 89 237 101 191
            116 136 101 128 101 128
            Z;

            M 84 144
            C 63 122 -5 125 1 70
            5 34 42 -2 99 11
            154 25 219 -28 260 25
            288 61 215 110 172 225
            133 331 72 271 84 225
            99 170 84 144 84 144
            Z;

            // M 84 140
            // C 40 83 -5 121 0 66
            // 5 29 73 -32 102 20
            // 130 69 205 -13 252 35
            // 346 130 186 97 186 221
            // 186 333 33 239 68 208
            // 102 177 84 140 84 140
            // Z;

            // M 101 128
            // C 80 106 21 136 28 81
            // 32 45 57 14 116 14
            // 175 14 236 -25 277 28
            // 305 64 262 122 183 202
            // 104 283 89 237 101 191
            // 116 136 101 128 101 128
            // Z;
            "
          />
        </path>
        <path id="opaqueObject" fill="#EEAE5C" fillOpacity="0.27">
          <animate
            attributeName="d"
            dur="120s"
            repeatCount="indefinite"
            keyTimes="0;
            0.33;
            0.66;
            1"
            keySplines="0.5, 0, 0.5, 1; 0.5, 0, 0.5, 1;"
            values="M80.4959 145.354C66.893 131.994 39.687 139.281 22.4404 130.293C-9.93197 113.423 47.823 68.4435 105.889 57.7022C163.955 46.961 198.31 -15.9516 248.985 29.2678C282.972 59.5959 268.473 96.9831 205.259 190.567C162.614 253.7 126.936 269.291 121.062 238.874C107.584 169.087 94.0989 158.714 80.4959 145.354Z;
            M72.0195 187.567C55.1501 147.805 49.7076 151.341 32.461 142.354C0.0886603 125.484 30.7087 44.5983 88.889 54.7022C152.785 65.7988 146.613 9.48285 197.288 54.7023C231.275 85.0304 136.302 95.4677 152.785 187.567C166.206 262.561 62.5825 288.153 72.0195 258.647C88.889 205.902 88.889 227.329 72.0195 187.567Z;
            M60.0196 196.826C43.1502 157.064 77.2662 116.807 60.0196 107.819C27.6473 90.9494 39.7496 25.1915 97.9299 35.2955C161.826 46.3921 156.041 19.745 206.716 64.9644C240.703 95.2926 186.937 107.819 152.444 182.89C120.635 252.119 117.293 300.68 88.5476 289.129C18.8128 261.109 76.889 236.589 60.0196 196.826Z;
            M80.4959 145.354C66.893 131.994 39.687 139.281 22.4404 130.293C-9.93197 113.423 47.823 68.4435 105.889 57.7022C163.955 46.961 198.31 -15.9516 248.985 29.2678C282.972 59.5959 268.473 96.9831 205.259 190.567C162.614 253.7 126.936 269.291 121.062 238.874C107.584 169.087 94.0989 158.714 80.4959 145.354Z;
            "
          />
        </path>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="156.934"
            x2="156.934"
            y1="0.262"
            y2="246.713"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DC9239" stopOpacity="0.35"></stop>
            <stop offset="1" stopColor="#FF9616"></stop>
          </linearGradient>
        </defs>
      </svg>
    </React.Fragment>
  );
}
