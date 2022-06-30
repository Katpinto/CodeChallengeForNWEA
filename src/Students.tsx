import React from "react";
import {Breadcrumbs, Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";


interface Students {
    studentName: string;
    tests: { testName: string; testScore: number; }[];
}
interface StudentProps {
    students: Students[];
}


function StudentsPage () {

    const location = useLocation()
    console.log("location is: ", location)
     const state = location.state as StudentProps
    console.log("state is: ", state)
    const navigate = useNavigate()


    return <div style={{backgroundColor: '#9fa1ce', height: 1460}}>
        <>
            <Typography variant='h3' align='center' paragraph={true}>Course Results</Typography>
            <Breadcrumbs style={{width: "max-content", marginLeft: "auto", marginRight: "auto", marginBottom: 16}}>
                <Typography variant='body1' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>Classes</Typography>
                <Typography variant='body1' color='text.primary'>Students</Typography>
            </Breadcrumbs>
            <Grid container={true} direction='row' justifyContent='center' spacing={2}>
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