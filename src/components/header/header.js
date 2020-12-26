import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, IconButton, Badge, TextField } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
//----------------------local-hosts---------------------//
import { GetUser, Logout } from "../../actions/users";
import MenuDrawer from "../../components/utils/drawer";
import MenuItems from "./menuOptions";
import Style from "./style";

const Header = ({ postsCount, posts }) => {
  const classes = Style();
  const dispatch = useDispatch();

  // logged in user email & name
  const { email, name } = useSelector((state) => state.users.userDetails);

  useEffect(() => {
    // gets user details from server (email & name)
    dispatch(GetUser());
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    try {
      dispatch(Logout());
    } catch (error) {
      console.log(error.message);
    }
  };

  // const options = Array.from(posts).map((option) => {
  //   const firstLetter = option.title[0];
  //   return {
  //     firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
  //     ...option,
  //   };
  // });

  return (
    <>
      {/* Header bar*/}
      <AppBar position="static">
        <Toolbar className={classes.root}>
          {/* Menu icon */}
          <div className={classes.menu}>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </div>

          {/* Search box */}
          <div className={classes.searchBox}>
            {/* <Autocomplete
              id="posts"
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              groupBy={(option) => option.firstLetter}
              getOptionSelected={(option, value) => option.title[0] === value.firstLetter}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params} label="Search posts by name..." variant="outlined" />}
            /> */}
          </div>

          {/* Posts count icon */}
          <div className={classes.menu}>
            <Badge badgeContent={postsCount} color="secondary">
              <PhotoLibraryIcon />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>

      {/* Menu seaction : opens when user clicks menu icon*/}
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} listData={MenuItems} name={name} email={email} handleLogout={() => handleLogout} />
    </>
  );
};
export default Header;
