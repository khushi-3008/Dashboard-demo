import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import './navbar.css'
import { IconContext } from 'react-icons'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Images from '../Images/calculator.png'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => {
        setSidebar(sidebar);
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>

                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>

                    <ul style={{ color: "#fff", marginLeft: "1150px", float: "right", fontSize: "25px" }}>
                        <FaIcons.FaBell />
                    </ul>

                    <ul style={{ color: "#fff", marginLeft: "40px", float: "right", fontSize: "25px" }}>
                        Kavya Shah
                        </ul>

                    <ul style={{ color: "#fff", marginLeft: "10px", float: "right", fontSize: "25px" }}>
                        <FaIcons.FaUserCircle />
                        </ul>




                    <ul style={{ color: "#fff", marginLeft: "10px", float: "right", fontSize: "25px" }}>
                        <FaIcons.FaSortDown />
                    </ul>

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                {/* <Link to="#" className="menu-bars">
                                    <AiIcons.AiOutlineClose />
                                </Link> */}

                                <div className="logo">
                                    <img src="https://s3-ap-southeast-1.amazonaws.com/internshala-uploads/google_logo/5f8d3827570411603090471.png" alt="logo" style={{ width: "180px", height: "80px", padding: "10px", marginTop: "30px", marginBottom: "50px" }} />
                                </div>

                                {Sidebar.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path} >
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </li>
                        </ul>

                    </nav>

                </div>
            </IconContext.Provider>

            <div className="row-wrapper">
                <Card
                    style={{
                        marginLeft: "35vh",
                        marginTop: "3vh",
                        width: 400,
                        backgroundColor: "#1AC9E6",
                        float: 'left'

                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            UPCOMING LESSONS
                    </Typography>

                        <Typography
                            style={{
                                background: "rgba(26,201,230,0.15)",
                                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
                                backdropFilter: window.blur("0.0px"),
                                WebkitBackdropFilter: window.blur("0.0px"),
                                borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.18",
                                padding: "10px",
                                marginTop: "20px"

                            }}
                        >
                            June 10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Algebra-II<br /> 4:00 pm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maths &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaIcons.FaCalculator style={{ width: "30px", height: "30px", marginLeft: "40vh", marginTop: "-40px", float: "right" }} />
                        </Typography>

                        <Typography
                            style={{
                                background: "rgba(26,201,230,0.15)",
                                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
                                backdropFilter: window.blur("0.0px"),
                                WebkitBackdropFilter: window.blur("0.0px"),
                                borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.18",
                                padding: "10px",
                                marginTop: "20px"

                            }}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



          </Typography>

                        <Typography
                            style={{
                                background: "rgba(26,201,230,0.15)",
                                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
                                backdropFilter: window.blur("0.0px"),
                                WebkitBackdropFilter: window.blur("0.0px"),
                                borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.18",
                                padding: "10px",
                                marginTop: "20px"

                            }}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </Typography>

                    </CardContent>

                </Card>

                {/* End of 1st card */}

                <Card
                    style={{
                        marginLeft: "2vh",
                        marginTop: "3vh",
                        width: 400,
                        backgroundColor: "#fd625e",
                        float: 'left',
                        height: "45vh"
                    }}
                >
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            TASKS TO DO
                    </Typography>

                    </CardContent>

                </Card>

                {/* End of 2nd Card */}

                <Card
                    style={{
                        marginLeft: "2vh",
                        marginTop: "3vh",
                        width: 400,
                        backgroundColor: "#01b8aa",
                        float: 'left',
                        height: "45vh"
                    }}
                >
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            LEADERBOARD
                    </Typography>

                    </CardContent>

                </Card>

                {/* End of 3rd card */}

            </div>

            {/* 2nd row start */}

            <div className="row-wrapper">
                <Card
                    style={{
                        marginLeft: "35vh",
                        marginTop: "2vh",
                        width: 820,
                        backgroundColor: "#fece2f",
                        height: "45vh",
                        marginBottom: "2vh"

                    }}
                >
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            MY COURSES
                        </Typography>

                        <Typography variant="h6"
                            style={{
                                float: 'right',
                                marginTop: "-35px",
                                padding: "5px"
                            }}>
                            See all
                        </Typography>

                        <Typography>

                            <div className="inner-wrapper">

                                <div className="inner-div1" width="50%">

                                    <Typography>
                                        <img src={Images} style={{ marginTop: "-108px", float: "left", marginLeft: "25px" }} alt="math" width="50px" height="50px" />
                                    </Typography>

                                    <Card
                                        style={{
                                            marginTop: "-82px",
                                            width: 400,
                                            backgroundColor: "#fece2f",
                                            // background: "rgba(26,201,230,0.15)",
                                            boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
                                            backdropFilter: window.blur("0.0px"),
                                            WebkitBackdropFilter: window.blur("0.0px"),
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255,255,255,0.18",
                                            padding: "8px"

                                        }}
                                    >
                                        <CardContent>

                                            <Typography>
                                                <span style={{ float: "right", marginRight: "130px", marginBottom: "20px" }}>Maths</span>


                                            </Typography>

                                        </CardContent>
                                    </Card>

                                </div>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    style={{
                        marginLeft: "2vh",
                        marginTop: "2vh",
                        width: 400,
                        backgroundColor: "#1AC9E6",
                        float: 'left',
                        height: "90vh"
                    }}
                >
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            HOMEWORK PROGRESS
                                        </Typography>

                    </CardContent>

                </Card>

            </div>

            <div>
                <Card
                    style={{
                        marginLeft: "35vh",
                        width: 400,
                        backgroundColor: "#fd625e",
                        float: 'left',
                        marginBottom: "15px",
                        height: "45vh",
                        marginTop: "-325px"

                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            GRAPH
                        </Typography>
                    </CardContent>

                </Card>

            </div>

        </>
    )
}

export default Navbar;