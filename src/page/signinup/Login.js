import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, SpaceBetween, FormField, Input, Button, KeyValuePairs, Wizard } from "@cloudscape-design/components";
import { AuthContext } from "../../App";

export default function Logins() {
    const [activeStepIndex, setActiveStepIndex] = React.useState(0);
    const navigate = useNavigate();
    const { registrationSuccess, setLoginSuccess } = useContext(AuthContext);
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });


    useEffect(() => {
        if (registrationSuccess) {
            alert('Registration successful!');
        }
    }, [registrationSuccess]);

    const handleChange = (name) => (e) => {
        const value = e.detail?.value || e.target?.value;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleLogin = () => {
        // Login logic here
        if (formValues.email && formValues.password) {
            setLoginSuccess(true);
            alert('Login successful!');
            const user = location.state?.user;
            if (user) {
                navigate('/profile', { state: { user } });
            } else {
                navigate('/home');
            }
        } else {
            alert('Login failed!');
        }
    };

    const handleRegister = () => {
        navigate('/signinup/register');
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
                submitButton: <Button variant="primary" onClick={handleLogin}>Login</Button>,
                optional: "optional"
            }}
            onNavigate={({ detail }) => setActiveStepIndex(detail.requestedStepIndex)}
            activeStepIndex={activeStepIndex}
            steps={[
                {
                    title: 'Please login',
                    content: (
                        <Container header={<Header variant="h2">Form Login</Header>}>
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="Email">
                                    <Input
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange('email')}
                                    />
                                </FormField>
                                <FormField label="Password">
                                    <Input
                                        name="password"
                                        type="password"
                                        value={formValues.password}
                                        onChange={handleChange('password')}
                                    />
                                </FormField>
                                <SpaceBetween direction="horizontal" size="l">
                                    <Button onClick={handleRegister}>Register</Button>
                                </SpaceBetween>
                            </SpaceBetween>
                        </Container>
                    )
                },
                {
                    title: 'Login',
                    content: (
                        <SpaceBetween size="xs">
                            <Header
                                variant="h3"
                                actions={<Button onClick={() => setActiveStepIndex(0)}>Edit</Button>}
                            >
                                Welcome! Success
                            </Header>
                            <Container header={<Header variant="h2">Container Title</Header>}>
                                <KeyValuePairs
                                    columns={2}
                                    items={[
                                        { label: 'Your email', value: formValues.email },
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
