import { Box, BoxProps, createIcon, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export function Card(props: BoxProps) {
  const shadowColour = useColorModeValue("#D8DAE6", "#161616");
  const bg = useColorModeValue("white", "#1C2226");

  return (
    <Box
      backgroundColor={bg}
      m="6"
      my="8"
      borderRadius="14"
      boxShadow={`0px 6px 14px ${shadowColour};`}
      {...props}
    />
  );
}

export const WootSunIcon = createIcon({
  displayName: "WootSunIcon",
  viewBox: "0 0 250 250",
  path: (
    <>
      <path
        fill="currentColor"
        d="M125,64.8c-33.2,0-60.2,27-60.2,60.2s27,60.2,60.2,60.2c33.2,0,60.2-27,60.2-60.2S158.2,64.8,125,64.8z"
      />
      <g>
        <g>
          <path
            fill="currentColor"
            d="M125,47.1c-6.5,0-11.7-5.3-11.7-11.7V16.6c0-6.5,5.3-11.7,11.7-11.7s11.7,5.3,11.7,11.7v18.8
    C136.7,41.9,131.5,47.1,125,47.1z"
          />
        </g>
        <g>
          <path
            fill="currentColor"
            d="M125,202.9c-6.5,0-11.7,5.3-11.7,11.7v18.8c0,6.5,5.3,11.7,11.7,11.7s11.7-5.3,11.7-11.7v-18.8
    C136.7,208.1,131.5,202.9,125,202.9z"
          />
        </g>
        <g>
          <path
            fill="currentColor"
            d="M180.1,69.9c-4.6-4.6-4.6-12,0-16.6l13.3-13.3c4.6-4.6,12-4.6,16.6,0c4.6,4.6,4.6,12,0,16.6l-13.3,13.3
    C192.1,74.5,184.6,74.5,180.1,69.9z"
          />
        </g>
        <g>
          <path
            fill="currentColor"
            d="M69.9,180.1c-4.6-4.6-12-4.6-16.6,0l-13.3,13.3c-4.6,4.6-4.6,12,0,16.6c4.6,4.6,12,4.6,16.6,0l13.3-13.3
    C74.5,192.1,74.5,184.6,69.9,180.1z"
          />
        </g>
        <g>
          <path
            fill="currentColor"
            d="M202.9,125c0-6.5,5.3-11.7,11.7-11.7h18.8c6.5,0,11.7,5.3,11.7,11.7s-5.3,11.7-11.7,11.7h-18.8
    C208.1,136.7,202.9,131.5,202.9,125z"
          />
        </g>
        <g>
          <path
            fill="currentColor"
            d="M47.1,125c0-6.5-5.3-11.7-11.7-11.7H16.6c-6.5,0-11.7,5.3-11.7,11.7s5.3,11.7,11.7,11.7h18.8
    C41.9,136.7,47.1,131.5,47.1,125z"
          />
        </g>
        <g>
          <path
            fill="currentColor"
            d="M180.1,180.1c4.6-4.6,12-4.6,16.6,0l13.3,13.3c4.6,4.6,4.6,12,0,16.6c-4.6,4.6-12,4.6-16.6,0l-13.3-13.3
    C175.5,192.1,175.5,184.6,180.1,180.1z"
          />
        </g>
        <g>
          <path
            fill="currentColor"
            d="M69.9,69.9c4.6-4.6,4.6-12,0-16.6L56.7,40.1c-4.6-4.6-12-4.6-16.6,0c-4.6,4.6-4.6,12,0,16.6l13.3,13.3
    C57.9,74.5,65.4,74.5,69.9,69.9z"
          />
        </g>
      </g>
    </>
  ),
});
