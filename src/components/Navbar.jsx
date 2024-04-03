import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../assets/youtube copy.png'
import {Typography} from "@mui/material";
//import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#FFFFFF', top: 0, justifyContent: "space-between" }}>
    <Stack direction="row" spacing={1}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={35} />
    </Link>
    <Typography variant="h5" sx={{fontWeight:'bold'}}>YouTube Clone</Typography>
    </Stack>
    <SearchBar />
  </Stack>
);

export default Navbar;
