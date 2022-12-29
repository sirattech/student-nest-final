import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./SideBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineHome } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi"
import { RiAccountCircleFill } from "react-icons/ri"
import logo1 from "../../Assets/44627.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { GiGears } from "react-icons/gi"
import {
  Routes,
  Route,
  Link,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import { FaClipboard } from "react-icons/fa"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiEdit } from "react-icons/fi"
import { MdSwitchAccount } from "react-icons/md"
import axios from 'axios';
import { AiFillDashboard } from "react-icons/ai"
import { HiUserGroup } from "react-icons/hi"
import Dashboard from '../Dashboard/Dashboard';
import User from '../User/User';
import Schedule from '../Schedule/Schedule';
import Collapse from '@material-ui/core/Collapse'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import Agencies from '../Agencies/Agencies';
import Programs from '../Program/Programs';
import Schools from '../Schools/Schools';
import Grade from '../Grade/Grade';
import Subject from '../Subject/Subject';
import EmailNotification from '../EmailNotification/EmailNotification';
import ActivityLog from '../ActivityLog/ActivityLog';
import ShowSingleAgencyData from '../Agencies/ShowSingleAgencyData';
import UpdateSingleAgencyData from '../Agencies/UpdateSingleAgencyData';
import ShowSingleProgramData from '../Program/ShowSingleProgramData';
import UpdateSingleProgramData from '../Program/UpdateSingleProgramData';
import ShowSingleSchoolData from '../Schools/ShowSingleSchoolData';
import UpdateSingleSchoolData from '../Schools/UpdateSingleSchoolData';
import ShowSingleGradeData from '../Grade/ShowSingleGradeData';
import UpdateSingleGradeData from '../Grade/UpdateSingleGradeData';
import ShowSingleSubjectData from '../Subject/ShowSingleSubjectData';
import UpdateSingleSubjectData from '../Subject/UpdateSingleSubjectData';
// import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { BACKEND_URI, LOCAL_URL } from "../../config/config"

// import Popover from '@mui/material/Popover';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
const drawerWidth = 240;

interface Props {

  window?: () => Window;
}
const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: 'red',
    },
  }),
)
export default function ResponsiveDrawer(props: Props, { setData }) {
  let [projectName, setProjectName] = useState([])
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isColor, setIsColor] = useState("Create AR Project")
  const [navColor, isNavColor] = useState("save")
  // const { pathname } = useLocation();
  const [editData, setEditData] = useState("");
  let [totalProject, setTotalProject] = useState(0);

  // let auth = localStorage.getItem("webar")

  // let auths = JSON.parse(auth)
  // console.log("auths", auths);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const changeRoute = () => {

  //   if (pathname) {
  //     if (pathname == "/sidebar/HomePage") {
  //       setIsColor("Create AR Project")
  //     } else if (pathname == "/sidebar/myproject") {
  //       setIsColor("My Project")
  //     } else if (pathname == "/sidebar/myprofile") {
  //       setIsColor("View Miner")
  //     }
  //     else if (pathname == "/mindar") {
  //       setIsColor("WebAR")
  //     }
  //   }
  // }
  // const ChangeRouteTwo = () => {
  //   if (pathname) {
  //     if (pathname == "/sidebar/HomePage") {
  //       isNavColor("save")
  //     } else if (pathname == "/sidebar/preview") {
  //       isNavColor("Preview")
  //     } else if (pathname == "/sidebar/publish") {
  //       isNavColor("Publish")
  //     }
  //   }
  // }

  // const StatusData = async () => {
  //   try {

  //     await axios.get(`${BACKEND_URI}/getdata`).then((resp) => {
  //       let statusShow = []
  //       let projectnames = []
  //       for (var i = 0; i < resp.data.length; i++) {
  //         console.log(resp.data[i]);
  //         if (resp.data[i].webardata.ids == auths.IdAddress) {
  //           console.log("res1", resp.data[i].webardata.editData);
  //           let statusData = resp.data[i]

  //           projectnames.push(resp.data[i].webardata.editData)
  //           statusShow.push(statusData)
  //         }
  //       }
  //       setTotalProject(statusShow.length)
  //       setProjectName(projectnames)
  //     })
  //   } catch (e) {
  //     console.log("e", e);
  //   }
  // }
  useEffect(() => {
    // changeRoute();
    // StatusData();
  }, [])
  useEffect(() => {
    // ChangeRouteTwo();
  }, [])
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [openOne, setOpenOne] = React.useState(false)
  function handleClick() {
    setOpen(!open)
  }
  function handleClickOne() {
    setOpenOne(!openOne)
  }


  const drawer = (
    <div className="stakenmsColor1" style={{ color: "white" }}>
      <Toolbar className="text-start d-flex align-items-center justify-content-start pb-3 pt-1" style={{ backgroundColor: "white", color: "black" }}>
        <img src={logo1} width="170px" />
        {/* <p className="side-p mt-3 ms-2">AR Create Tool</p> */}
      </Toolbar>
      <br />
      <Divider />
      {/* {
        auth ? 
        :
          <>
          </>
      } */}

      <List>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem button href="#deshborad" key="Dashboard"
            onClick={() => {
              setIsColor("Create AR Project");
              isNavColor("save")
            }}
            className="staking-btn pt-3 pb-3"
          // className={isColor == "Create AR Project" ? ' staking-btn_active' : 'staking-btn'} 
          >
            <ListItemIcon >
              <AiFillDashboard color='#AEB2B7' className='ms-3' size={18} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/user" style={{ textDecoration: "none" }}>
          <ListItem button key="My Project"
            onClick={() => {
              setIsColor("My Project")
            }}
            className="staking-btn pt-3 pb-3"

          // className={isColor == "My Project" ? ' staking-btn_active' : 'staking-btn text-white'}
          >

            <ListItemIcon>
              <HiUserGroup color='#AEB2B7' className='ms-3' size={18} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </Link>
        {/* </Link>
          <Link to="/sidebar/myprofile" style={{ textDecoration: "none" }}> */}
        <Link to="/schedule" style={{ textDecoration: "none" }}>
          <ListItem button key="My Account"
            onClick={() => {
              setIsColor("View Miner")
            }}
            className="staking-btn pt-3 pb-3"

          // className={isColor == "View Miner" ? ' staking-btn_active' : 'staking-btn text-white'}
          >
            <ListItemIcon>
              <HiUserGroup color='#AEB2B7' className='ms-3' size={18} />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItem>
        </Link>

        <ListItem button onClick={handleClick} className="staking-btn pt-3 pb-3">
          <ListItemIcon className={classes.menuItemIcon}>
            <GiGears color='#AEB2B7' className='ms-3' size={18} />
            {/* <i class="fa-solid fa-gears"></i> */}
          </ListItemIcon>
          <ListItemText primary="Configuration" />
          {open ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <Link to="/agencies" style={{ textDecoration: "none" }} >
              <ListItem button className="staking-btn-down pt-2 pb-2" onClick={handleClick}>
                <ListItemText inset primary="Agencies" />
              </ListItem>
            </Link>
            <Link to="/program" style={{ textDecoration: "none" }}>
              <ListItem button className="staking-btn-down pt-2 pb-2" onClick={handleClick}>
                <ListItemText inset primary="Programs" />
              </ListItem>
            </Link>
            <Link to="/schools" style={{ textDecoration: "none" }} >
              <ListItem button className="staking-btn-down pt-2 pb-2" onClick={handleClick}>
                <ListItemText inset primary="Schools" />
              </ListItem>
            </Link>
            <Link to="/grade" style={{ textDecoration: "none" }}>
              <ListItem button className="staking-btn-down pt-2 pb-2" onClick={handleClick}>
                <ListItemText inset primary="Grades" />
              </ListItem>
            </Link>
            <Link to="/subject" style={{ textDecoration: "none" }}>
              <ListItem button className="staking-btn-down pt-2 pb-2" onClick={handleClick}>
                <ListItemText inset primary="Subjects" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem button onClick={handleClickOne} className="staking-btn pt-3 pb-3">
          <ListItemIcon className={classes.menuItemIcon}>
            <FaClipboard color='#AEB2B7' className='ms-3' size={18} />
            {/* <i class="fa-solid fa-gears"></i> */}
          </ListItemIcon>
          <ListItemText primary="Reports" />
          {openOne ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
        <Collapse in={openOne} timeout="auto" unmountOnExit>
          <Divider />
          <Link to="/notification" style={{ textDecoration: "none" }}>
          <ListItem button className="staking-btn-down pt-2 pb-2" onClick={handleClickOne}>
            <ListItemText inset primary="Email Notifications" />
          </ListItem>
          </Link>
          <Link to="/activity" style={{ textDecoration: "none" }}>
          <ListItem button className="staking-btn-down pt-2 pb-2" onClick={handleClickOne}>
            <ListItemText inset primary="Activity Log" />
          </ListItem>
          </Link>
        </Collapse>

      </List>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{
          backgroundColor: "#fff", width: '100%', paddingTop: "13px", paddingBottom: "13px"
        }}>

          <Typography style={{ color: "white", display: "flex", width: '100%' }} >
            <div style={{ width: '100%' }} >
              <Navbar collapseOnSelect  sticky="top" variant="light" style={{ width: "100%", backgroundColor: '#fff' }} >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon style={{ color: "black" }} />
                </IconButton>
                <Navbar.Brand href="#home" className="newProject-span d-flex" >


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className=" nav  d-flex justify-content-evenly nav-one-width" >

                    {/* <Nav.Link href="" className={navColor == "save" ? 'nav-text-active' : "nav-text"} id="save" onClick={() => {
                      isNavColor("save")
                     
                      }} on>
                      
                      Save
                     
                    </Nav.Link>
                    <Nav.Link href="" className={navColor == "Preview" ? 'nav-text-active' : "nav-text"} id="Preview" onClick={() => isNavColor("Preview")} >Preview</Nav.Link>
                    <Nav.Link href="" className={navColor == "Publish" ? 'nav-text-active' : "nav-text"} id="Publish" onClick={() => isNavColor("Publish")}>Publish</Nav.Link> */}
                  </Nav>
                  <Nav className=' d-flex align-items-center justify-content-start'>
                    {/* <Nav.Link className='nav-text'><EmailIcon style={{ color: '#0e1a35' }} /></Nav.Link> */}
                    <Nav.Link className='nav-text'>

                    <input id="s" type="search" placeholder="search"/>
                    </Nav.Link>
                    <Nav.Link href=""></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      // style={{ backgroundColor: "#F1F2F7"  }}
      >
        <Toolbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/user' element={<User />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path='/agencies' element={<Agencies />} />
          <Route exact path="/program" element={<Programs />} />
          <Route exact path='/schools' element={<Schools />} />
          <Route exact path='/grade' element={<Grade />} />
          <Route exact path='/subject' element={<Subject />} />
          <Route exact path='/notification' element={<EmailNotification/>}/>
          <Route exact path='/activity' element={<ActivityLog/>}/>
          <Route exact path="/show_single_agency_data/:id" element={<ShowSingleAgencyData/>}/>
          <Route exact path="/update_single_agency_data/:id" element={<UpdateSingleAgencyData/>}/>
          <Route exact path="/show_single_program_data/:id" element={<ShowSingleProgramData/>}/>
          <Route exact path="/update_single_program_data/:id" element={<UpdateSingleProgramData/>}/>
          <Route exact path="/show_single_school_data/:id" element={<ShowSingleSchoolData/>}/>
          <Route exact path="/update_single_school_data/:id" element={<UpdateSingleSchoolData/>}/>
          <Route exact path="/show_single_Grade_data/:id" element={<ShowSingleGradeData/>}/>
          <Route exact path="/update_single_Grade_data/:id" element={<UpdateSingleGradeData/>}/>
          <Route exact path='/show_single_subject_data/:id' element={<ShowSingleSubjectData/>}/>
          <Route exact path='/update_single_subject_data/:id' element={<UpdateSingleSubjectData/>}/>

        </Routes>
        {/* <Dashboard/> */}
        {/* <Routes>
          <Route exact path='/Homepage' element={<HomePage editData={editData} isNavColor={isNavColor} />} >
          </Route>
          <Route path="preview" element={<Preview />} isNavColor={isNavColor} />
          <Route path="publish" element={<Publish setIsColor={setIsColor} />} />
          <Route exact path="/myproject" element={<MyProject />} />
          <Route exact path="/myprofile" element={<MyProfile />} />
          <Route exact path="/mindar" element={<div className="container121"><MindarViewer /><video></video></div>} />
        </Routes> */}
      </Box>
    </Box>
  );
}

