import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wizard from "@cloudscape-design/components/wizard";
import { Link, Container, Header, SpaceBetween, FormField, Input, Button, KeyValuePairs } from "@cloudscape-design/components";
import { AuthContext } from "../../App";

export default () => {
    const navigate = useNavigate();
    const { setRegistrationSuccess } = useContext(AuthContext);
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        city: '',
        country: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegister = () => {
        // Registration logic here
        setRegistrationSuccess(true);
        navigate('/signinup/login', { state: { user: formValues } });
    };

    const handleChange = (name) => (e) => {
        const value = e.detail?.value || e.target?.value;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <Wizard
            i18nStrings={{
                stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
                collapsedStepsLabel: (stepNumber, stepsCount) => `Step ${stepNumber} of ${stepsCount}`,
                skipToButtonLabel: (step, stepNumber) => `Skip to ${step.title}`,
                navigationAriaLabel: "Steps",
                cancelButton: "Cancel",
                previousButton: "Previous",
                nextButton: "Next",
                submitButton: <Button variant="primary" onClick={handleRegister}>Login</Button>,
                optional: "optional"
            }}
            onNavigate={({ detail }) => setActiveStepIndex(detail.requestedStepIndex)}
            activeStepIndex={activeStepIndex}
            steps={[
                {
                    title: 'Your Introduce',
                    info: <Link variant="info">Info</Link>,
                    // description: 'Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.',
                    content: (
                        <Container header={<Header variant="h2">Welcome! How are you?</Header>}>
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="First name">
                                    <Input
                                        name="firstName"
                                        value={formValues.firstName}
                                        onChange={handleChange('firstName')}
                                    />
                                </FormField>
                                <FormField label="Last name">
                                    <Input
                                        name="lastName"
                                        value={formValues.lastName}
                                        onChange={handleChange('lastName')}
                                    />
                                </FormField>
                            </SpaceBetween>
                        </Container>
                    )
                },
                {
                    title: 'Register',
                    content: (
                        <Container header={<Header variant="h2">Register Form</Header>}>
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="Your Email">
                                    <Input
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange('email')}
                                    />
                                </FormField>
                                <FormField label="Confirm Email">
                                    <Input
                                        name="confirmEmail"
                                        value={formValues.confirmEmail}
                                        onChange={handleChange('confirmEmail')}
                                    />
                                </FormField>
                                <FormField label="Phone Number">
                                    <Input
                                        name="phoneNumber"
                                        value={formValues.phoneNumber}
                                        onChange={handleChange('phoneNumber')}
                                    />
                                </FormField>
                                <FormField label="City">
                                    <Input
                                        name="city"
                                        value={formValues.city}
                                        onChange={handleChange('city')}
                                    />
                                </FormField>
                                <FormField label="Country">
                                    <Input
                                        name="country"
                                        value={formValues.country}
                                        onChange={handleChange('country')}
                                    />
                                </FormField>
                            </SpaceBetween>
                        </Container>
                    ),
                    isOptional: true
                },
                {
                    title: 'Your Password',
                    content: (
                        <Container header={<Header variant="h2">Password Form</Header>}>
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="Your Password">
                                    <Input
                                        name="password"
                                        type="password"
                                        value={formValues.password}
                                        onChange={handleChange('password')}
                                    />
                                </FormField>
                                <FormField label="Confirm Password">
                                    <Input
                                        name="confirmPassword"
                                        type="password"
                                        value={formValues.confirmPassword}
                                        onChange={handleChange('confirmPassword')}
                                    />
                                </FormField>
                            </SpaceBetween>
                        </Container>
                    ),
                    isOptional: true
                },
                {
                    title: 'Review Profile',
                    content: (
                        <SpaceBetween size="xs">
                            <Header
                                variant="h3"
                                actions={<Button onClick={() => setActiveStepIndex(0)}>Edit</Button>}
                            >
                                Review Your Information
                            </Header>
                            <Container header={<Header variant="h2">Review Details</Header>}>
                                <KeyValuePairs
                                    columns={2}
                                    items={[
                                        { label: 'First Name', value: formValues.firstName },
                                        { label: 'Last Name', value: formValues.lastName },
                                        { label: 'Email', value: formValues.email },
                                        { label: 'Phone Number', value: formValues.phoneNumber },
                                        { label: 'City', value: formValues.city },
                                        { label: 'Country', value: formValues.country }
                                    ]}
                                />
                            </Container>
                        </SpaceBetween>
                    )
                }
            ]}
        />
    );
};
