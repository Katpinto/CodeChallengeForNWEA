import React from "react";
import {Breadcrumbs, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

//main interface for typing. Keeps Typescript happy and lets me know what to expect from Student's passed state
interface Exams {
    testName: string;
    testScore: number;
}
//secondary interface so it can read as an array
interface ExamProps {
    tests: Exams[];
}

function ExamsPage () {

    const location = useLocation()
    // console.log("location is: ", location) //Console log to check if location is coming through correctly, commented out since not needed currently
     const state = location.state as ExamProps
    // console.log("state is: ", state) //Console log to check if location.state is coming through correctly, commented out since not needed currently
    const navigate = useNavigate() //This lets the app go backwards to previous page and not lose the previous state


    return <div>
        <>
            <Typography variant='h3' align='center' paragraph={true}>Course Results</Typography>
            {/*MUI Breadcrumps component for navigation to traverse back up the line*/}
            <Breadcrumbs style={{width: "max-content", marginLeft: "auto", marginRight: "auto", marginBottom: 16}}>
                <Typography variant='body1' onClick={() => navigate(-2)} style={{cursor: 'pointer'}}>Classes</Typography>
                <Typography variant='body1' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>Students</Typography>
                <Typography variant='body1' color='text.primary'>Exams</Typography>
            </Breadcrumbs>
            <Grid container={true} direction='row' justifyContent='center' spacing={2}>
                {/*Map tests out so each exam and the student's score can be shown*/}
                {state.tests.map(test => (
                    <Grid item={true}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography variant='h5'>{test.testName}</Typography>
                                <Typography variant='body1'><strong>Score:</strong> {test.testScore}</Typography>
                            </CardContent>
                            <CardActions style={{marginLeft: 8, marginRight: 8}}>
                                <Typography variant="subtitle2" style={{cursor: "pointer"}} onClick={() => navigate(-1)}>Go Back</Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
                }
            </Grid>

        </>

    </div>
}

export default ExamsPage