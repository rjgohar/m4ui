import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import {
  Avatar,
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeToken } from "../../Features/signIn/signIn.slicer";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [userEmail, setUserEmail] = useState("");
  // const { loginLoadingSucess } = useSelector((state) => state.LoginSlicer);

  const { data } = useSelector((state) => state.LoginSlicer.login);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogOut = () => {
    dispatch(removeToken());
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      className={classes.container}
      ref={anchorRef}
      aria-controls={open ? "menu-list-grow" : undefined}
      aria-haspopup="true"
      onClick={handleToggle}
    >
      <div>
        {/* <AccountCircleIcon className={classes.userIcon} /> */}
        <Avatar
          alt="Remy Sharp"
          src="/broken-image.jpg"
          className={classes.orange}
        >
          {data?.userInfo?.email.slice(0, 1)}
        </Avatar>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <Link to="/dashboard" className={classes.link}>
                    <MenuItem>Dashboard</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Typography>{data?.userInfo?.username}</Typography>
    </div>
  );
};

export default UserLogin;

const useStyles = makeStyles((theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    cursor: "pointer",
    zIndex: "999",
  },
  userName: {
    fontSize: "16px",
  },
}));
