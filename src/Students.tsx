import React from "react";
import {Breadcrumbs, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";

//main interface for typing. Keeps Typescript happy and lets me know what to expect from Homepage's passed state
interface Students {
    studentName: string;
    tests: { testName: string; testScore: number; }[];
}
//seconday interface so it can be read as an array!
interface StudentProps {
    students: Students[];
}


function StudentsPage () {

    const location = useLocation()
    // console.log("location is: ", location) //Console log to check if location is coming through correctly, commented out since not needed currently
     const state = location.state as StudentProps
    // console.log("state is: ", state) //Console log to check if location.state is coming through correctly, commented out since not needed currently
    const navigate = useNavigate() //This lets the app go backwards to previous page and not lose the previous state


    return <div>
        <>
            <Typography variant='h3' align='center' paragraph={true}>Course Results</Typography>
            {/*Basic breadcrumbs pathing, pulled from MUI library*/}
            <Breadcrumbs style={{width: "max-content", marginLeft: "auto", marginRight: "auto", marginBottom: 16}}>
                <Typography variant='body1' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>Classes</Typography>
                <Typography variant='body1' color='text.primary'>Students</Typography>
            </Breadcrumbs>
            <Grid container={true} direction='row' justifyContent='center' spacing={2}>
                {/*Map out students into a grid item, where we can see their names, and then dive in further to see their test scores, or return to previous page*/}
                {state.students.map(student => (
                    <Grid item={true}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography variant='h4'>{student.studentName}</Typography>
                            </CardContent>
                            <CardActions style={{marginLeft: 8, marginRight: 8}}>
                                <Typography variant="subtitle2" >{<Link to="/exams" style={{textDecoration: "none", color: "#000000"}} state={{tests: student.tests}}>Exams</Link>}</Typography>
                                <Typography variant="subtitle2" style={{cursor: "pointer", width: '-webkit-fill-available', textAlign: "end"}} onClick={() => navigate(-1)}>Go Back</Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
                }
            </Grid>

        </>

    </div>
}

export default StudentsPage