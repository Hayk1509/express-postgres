import { Box, Stack } from "@mui/material";

import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const StyledHeader = styled(Box)(() => ({
  backdropFilter: "blur(6px)",
  backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
  position: "sticky",
  left: {
    lg: `${SIDE_NAV_WIDTH}px`,
  },
  top: 0,
  width: {
    lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
  },
  zIndex: (theme) => theme.zIndex.appBar,
}));

export const StyledStackWrapper = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: TOP_NAV_HEIGHT,
}));
