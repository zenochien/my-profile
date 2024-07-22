import React from 'react';
import {
    Container,
    Header,
    SpaceBetween,
    Button,
    Box,
    ColumnLayout,
} from '@cloudscape-design/components';

function Profile() {
    return (
        <Container>
            <Header variant="h1">John Doe</Header>
            <SpaceBetween size="l">
                <Box variant="awsui-key-label">Email</Box>
                <Box>john.doe@example.com</Box>
            </SpaceBetween>
            <SpaceBetween size="l">
                <Box variant="awsui-key-label">Phone</Box>
                <Box>+123 456 7890</Box>
            </SpaceBetween>
            <SpaceBetween size="l">
                <Box variant="awsui-key-label">Address</Box>
                <Box>123 Main St, Anytown, USA</Box>
            </SpaceBetween>
            <ColumnLayout columns={2} variant="text-grid">
                <Button variant="primary">Edit Profile</Button>
                <Button variant="link">Logout</Button>
            </ColumnLayout>
        </Container>
    );
}

export default Profile;
