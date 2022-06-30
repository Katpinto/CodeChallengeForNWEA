import React from "react";
import {Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";


function Homepage() {
    /*Here's the provided JSON file as a hardcoded const. Typically, I'd like to implement something like a database
    and use the axios library to make api calls to retrieve data. But for this challenge a hardcoded const is fine!*/
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


    return <div>
        <>
            <Typography variant='h3' align='center' paragraph={true}>Course Results</Typography>

            <Grid container={true} direction='row' justifyContent='center' spacing={2}>
                {/*Begin mapping data into a grid item so it's dynamically populated. If courses were needed to be represented on multiple pages of
                a webapp this would be easy to convert into a functional component for that purpose*/}
                {sampleData.map(subject => (
                    <Grid item={true} xs={6} sm={4} md={3} lg={3}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography variant='h4'>{subject.className}</Typography>
                                {/*I added a professor to the dataset for fun, and because I feel like it provides more context to the classes dataset*/}
                                <Typography variant='subtitle1' color='text.secondary'><strong>Professor:</strong> {subject.professor}</Typography>
                            </CardContent>
                            <CardActions style={{marginLeft: 8, marginRight: 8}}>
                                {/*I encased the react-router-dom link component within a Typography tag so it matches other text styling across the application*/}
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