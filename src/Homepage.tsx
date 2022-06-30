import React from "react";
import {Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";


function Homepage() {
    /*Here's the provided JSON file as a hardcoded const. Typically, I'd like to implement something like a database
    and use the axios library to make api calls to retrieve data. */
    const sampleData = [
        {
            "className": "Mathematics",
            "professor": "Yoda",
            "students": [
                {
                    "studentName": "Darth Vader",
                    "tests": [
                        {
                            "testName": "Week 1 pre-exam",
                            "testScore": 93
                        },
                        {
                            "testName": "Week 2 exam",
                            "testScore": 80
                        },
                        {
                            "testName": "Week 3 exam",
                            "testScore": 70
                        },
                        {
                            "testName": "Week 4 exam",
                            "testScore": 90
                        }
                    ]
                },
                {
                    "studentName": "Obi-Wan Kenobi",
                    "tests": [
                        {
                            "testName": "Week 1 pre-exam",
                            "testScore": 47
                        },
                        {
                            "testName": "Week 2 exam",
                            "testScore": 81
                        },
                        {
                            "testName": "Week 3 exam",
                            "testScore": 99
                        },
                        {
                            "testName": "Week 4 exam",
                            "testScore": 48
                        }
                    ]
                },
                {
                    "studentName": "Death Star Engineer",
                    "tests": [
                        {
                            "testName": "Week 1 pre-exam",
                            "testScore": 89
                        },
                        {
                            "testName": "Week 2 exam",
                            "testScore": 98
                        },
                        {
                            "testName": "Week 3 exam",
                            "testScore": 87
                        },
                        {
                            "testName": "Week 4 exam",
                            "testScore": 92
                        }
                    ]
                }
            ]
        },
        {
            "className": "Science",
            "professor": "Qui-Gon Jinn",
            "students": [
                {
                    "studentName": "Darth Vader",
                    "tests": [
                        {
                            "testName": "Week 1 pre-exam",
                            "testScore": 83
                        },
                        {
                            "testName": "Week 2 exam",
                            "testScore": 40
                        },
                        {
                            "testName": "Week 3 exam",
                            "testScore": 83
                        },
                        {
                            "testName": "Week 4 exam",
                            "testScore": 71
                        }
                    ]
                },
                {
                    "studentName": "Obi-Wan Kenobi",
                    "tests": [
                        {
                            "testName": "Week 1 pre-exam",
                            "testScore": 98
                        },
                        {
                            "testName": "Week 2 exam",
                            "testScore": 41
                        },
                        {
                            "testName": "Week 3 exam",
                            "testScore": 79
                        },
                        {
                            "testName": "Week 4 exam",
                            "testScore": 58
                        }
                    ]
                },
                {
                    "studentName": "Death Star Engineer",
                    "tests": [
                        {
                            "testName": "Week 1 pre-exam",
                            "testScore": 99
                        },
                        {
                            "testName": "Week 2 exam",
                            "testScore": 97
                        },
                        {
                            "testName": "Week 3 exam",
                            "testScore": 92
                        },
                        {
                            "testName": "Week 4 exam",
                            "testScore": 94
                        }
                    ]
                }
            ]
        }
    ]


    return <div style={{backgroundColor: '#9fa1ce', height: 1460}}>
        <>
            <Typography variant='h3' align='center' paragraph={true}>Course Results</Typography>


            <Grid container={true} direction='row' justifyContent='center' spacing={2}>
                {/*Begin mapping data into a grid item. Less lines of code,
                and could be pulled out into a separate const if we wanted to make it a re-usable functional component*/}
                {sampleData.map(subject => (
                    <Grid item={true} xs={2}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography variant='h4'>{subject.className}</Typography>
                                {/*I added a professor to the dataset for fun, and because I feel like it provides more context to the classes dataset*/}
                                <Typography variant='subtitle1' color='text.secondary'><strong>Professor:</strong> {subject.professor}</Typography>
                            </CardContent>
                            <CardActions style={{marginLeft: 8, marginRight: 8}}>
                                <Typography variant="subtitle2">{<Link to="/students" style={{textDecoration: "none", color: "#000000"}} state={{students: subject.students}}>See Students</Link>}</Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>

    </div>
}

export default Homepage