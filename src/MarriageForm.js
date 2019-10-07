import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import './marriageform.scss';

const MarriageForm = () => {
    return (

        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}></Grid>

            <Grid item xs={12} sm={5}>
                <Paper className="paper">
                    <div className="">

                        <Typography variant="h6" className="margin-10-bottom">
                            <b>Details of BrideGroom :</b>
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgmdate"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="DATE OF MARRIAGE"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgname"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="NAME OF THE GROOM"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgnationality"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="NATIONALITY"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        RESIDENTIAL STATUS IN INDIA
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="RESIDENT"
                                        value="nri"
                                        name="bgresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="NRI"
                                        value="other"
                                        name="bgresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="PIO"
                                        value="bgpio"
                                        name="bgresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="OCI"
                                        value="bgoci"
                                        name="bgresident"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        RELIGION
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="HINDU"
                                        value="hindu"
                                        name="bgreligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="MUSLIM"
                                        value="muslim"
                                        name="bgresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="JAIN"
                                        value="jain"
                                        name="bgreligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="CHRISTIAN"
                                        value="christian"
                                        name="bgreligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="BUDDHIST"
                                        value="buddhist"
                                        name="bgreligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="SEIKH"
                                        value="seikh"
                                        name="bgreligion"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgcaste"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="CASTE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgbday"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="DATE OF BIRTH"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        <b>OCCUPATION</b>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgename"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="NAME OF THE EMPLOYER"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgedegination"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="DESIGNATION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        MARITAL STATUS BEFORE MARRIAGE
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="BACHELOR"
                                        value="bachelor"
                                        name="bgemartialstatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="MARRIED"
                                        value="married"
                                        name="bgemartialstatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="DIVORCEE"
                                        value="divorcee"
                                        name="bgemartialstatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="WIDOWER"
                                        value="windower"
                                        name="bgemartialstatus"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgemobilenumber"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="MOBILE NO."
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgewhatsappnumber"
                                        variant="outlined"
                                        fullWidth
                                        label="WHATSAPP NO."
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgeemailaddress"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="EMAIL ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgeresidentaladdress"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        multiline
                                        label="RESI. ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgepincode"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="PINCODE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgepassportnumber"
                                        variant="outlined"
                                        fullWidth
                                        label="PASSPORT NUMBER"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgefathernumber"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S NAME"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgefatherreligion"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S RELIGION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        LIVING STATUS
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="ALIVE"
                                        value="alive"
                                        name="bgefathermarraigestatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="DEAD"
                                        value="dead"
                                        name="bgefathermarraigestatus"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgefatherage"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S AGE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgefatheroccupation"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S OCCUPATION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgefatheraddress"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        label="FATHER’S ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgefathernumber"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S NAME"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgefatherreligion"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S RELIGION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        LIVING STATUS
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="ALIVE"
                                        value="alive"
                                        name="bgemothermarraigestatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="DEAD"
                                        value="dead"
                                        name="bgemothermarraigestatus"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgemotherage"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S AGE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgemotheroccupation"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S OCCUPATION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bgemotheraddress"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        label="MOTHER’S ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            <Typography variant="h6" className="margin-10-bottom">
                                <b>Details of Bride :</b>
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bname"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="NAME OF THE BRIDE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bnationality"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="NATIONALITY"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        RESIDENTIAL STATUS IN INDIA
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="RESIDENT"
                                        value="nri"
                                        name="bresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="NRI"
                                        value="other"
                                        name="bresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="PIO"
                                        value="bpio"
                                        name="bresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="OCI"
                                        value="boci"
                                        name="bresident"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        RELIGION
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="HINDU"
                                        value="hindu"
                                        name="breligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="MUSLIM"
                                        value="muslim"
                                        name="bresident"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="JAIN"
                                        value="jain"
                                        name="breligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="CHRISTIAN"
                                        value="christian"
                                        name="breligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="BUDDHIST"
                                        value="buddhist"
                                        name="breligion"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="SEIKH"
                                        value="seikh"
                                        name="breligion"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bcaste"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="CASTE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bbday"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="DATE OF BIRTH"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        <b>OCCUPATION</b>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bename"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="NAME OF THE EMPLOYER"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bedegination"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="DESIGNATION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        MARITAL STATUS BEFORE MARRIAGE
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="BACHELOR"
                                        value="bachelor"
                                        name="bemartialstatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="MARRIED"
                                        value="married"
                                        name="bemartialstatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="DIVORCEE"
                                        value="divorcee"
                                        name="bemartialstatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio color="primary" />}
                                        label="WIDOWER"
                                        value="windower"
                                        name="bemartialstatus"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bemobilenumber"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="MOBILE NO."
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bewhatsappnumber"
                                        variant="outlined"
                                        fullWidth
                                        label="WHATSAPP NO."
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="beemailaddress"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="EMAIL ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="beresidentaladdress"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        multiline
                                        label="RESI. ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bepincode"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="PINCODE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bepassportnumber"
                                        variant="outlined"
                                        fullWidth
                                        label="PASSPORT NUMBER"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="befathernumber"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S NAME"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="befatherreligion"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S RELIGION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        LIVING STATUS
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="ALIVE"
                                        value="alive"
                                        name="befathermarraigestatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="DEAD"
                                        value="dead"
                                        name="befathermarraigestatus"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="befatherage"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S AGE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="befatheroccupation"
                                        variant="outlined"
                                        fullWidth
                                        label="FATHER’S OCCUPATION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="befatheraddress"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        label="FATHER’S ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="befathernumber"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S NAME"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="befatherreligion"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S RELIGION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="p" className="margin-10-bottom">
                                        LIVING STATUS
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="ALIVE"
                                        value="alive"
                                        name="bemothermarraigestatus"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio color="primary" />}
                                        label="DEAD"
                                        value="dead"
                                        name="bemothermarraigestatus"
                                        labelPlacement="end"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bemotherage"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S AGE"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bemotheroccupation"
                                        variant="outlined"
                                        fullWidth
                                        label="MOTHER’S OCCUPATION"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bemotheraddress"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        label="MOTHER’S ADDRESS"
                                    />
                                </Grid>
                            </Grid>
                            
                            




                        </form>

                    </div>
                </Paper>
            </Grid>

            <Grid item xs={3}></Grid>
        </Grid>

    )
}

export default MarriageForm;
