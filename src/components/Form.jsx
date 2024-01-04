import React from 'react';

import {
    Grid,
    Card,
    Container,
    CardContent,
    CardActions,
    TextField,
    Button,
    Box,
    Typography
} from '@mui/material';
import useForm from '../hooks/validation';



const initialValues = {
    name: '',
    title: '',
    appointment_limit: '',
    address: '',
};
const validationRules = {
    name: (value) => (value ? '' : 'This field is required'),
    title: (value) => (value ? '' : 'This field is required'),
    appointment_limit: (value) => (value ? '' : 'This field is required'),
    address: (value) => (value ? '' : 'This field is required'),

};

const Form = () => {
    const { values, errors, handleOnChange, validateAllFields, setFormValues } = useForm(
        initialValues,
        validationRules
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateAllFields()) {
            setFormValues(initialValues)
        }
    };

    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card sx={{ padding: '1rem' }} component="form" onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: "1px solid #f2f2f2", padding: "1rem 1rem" }}>
                    <Typography variant="h6">Dummy Form</Typography>
                </Box>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant='outlined'
                                onChange={handleOnChange}
                                name="name"
                                value={values?.name}
                                helperText={errors?.name}
                                error={errors?.name}
                                inputLabel="Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Title"
                                variant='outlined'
                                onChange={handleOnChange}
                                name="title"
                                value={values?.title}
                                helperText={errors?.title}
                                error={errors?.title}
                                inputLabel="Title"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type='number'
                                label="Appointment limit"
                                variant='outlined'
                                onChange={handleOnChange}
                                name="appointment_limit"
                                value={values?.appointment_limit}
                                helperText={errors?.appointment_limit}
                                error={errors?.appointment_limit}
                                inputLabel="Appointment Limit"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                fullWidth
                                label="Address"
                                variant='outlined'
                                rows={4}
                                onChange={handleOnChange}
                                name="address"
                                value={values?.address}
                                helperText={errors?.address}
                                error={errors?.address}
                                inputLabel="Address"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button type='submit' variant="contained">
                        Create
                    </Button>

                </CardActions>
            </Card>
        </Container>
    );
};

export default Form;
