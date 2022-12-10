/*
TODO:
+ Agregar defaults
+ Agregar TYPES
+ Instalar Material UI
+ Mostrar estado como BADGE verde o amarillo
+ Mostrar carga como PROGRESS
+ Mostrar alertas como SNACKBARS
*/

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "yellow",
    color: "yellow",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

const Marker = ({ operador }) => {
  const url =
    "https://faces-img.xcdn.link/image-lorem-face-" + operador + ".jpg";

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <Avatar src={url} sx={{ width: 88, height: 88 }} />
    </StyledBadge>
  );
};

export default Marker;
