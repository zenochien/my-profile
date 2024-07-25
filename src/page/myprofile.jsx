import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tiles from './CustomHomeHeader/Tiles';
import {
    Form,
    FormField,
    Button,
    Modal,
    Alert,
    Tabs,
    SpaceBetween,
    Container,
    Header,
    Input,
    Box,
    Popover,
    ProgressBar
} from '@cloudscape-design/components';

const ProfilePage = () => {
    const location = useLocation();
    const user = location.state?.user;
    const [formData, setFormData] = useState(user || {});
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('success'); // 'success' or 'error'
    const [alertMessage, setAlertMessage] = useState('');
    const [avatar, setAvatar] = useState('/mnt/data/ảnh.png'); // Default avatar
    const [isEdit, setIsEdit] = useState(false);

    const fileInputRef = React.createRef();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Simulate a save operation
        const success = true; // Replace with actual save logic
        if (success) {
            setModalType('success');
            setAlertMessage('Your profile has been updated successfully.');
        } else {
            setModalType('error');
            setAlertMessage('There was an error updating your profile.');
        }
        setShowModal(true);
        setIsEdit(false);
    };

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleEdit = () => {
        setIsEdit(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setAlertMessage('');
    };

    const profileUrl = "https://domain.com/user";

    return (
        <div style={{ padding: '20px' }}>
            <SpaceBetween size="l">
                <Container
                    header={
                        <Header
                            variant="h1"
                            description={formData.city ? `${formData.city}, ${formData.country}` : 'User Profile'}
                            actions={
                                <div style={{ marginRight: '15px' }}>
                                    <Button onClick={isEdit ? handleFormSubmit : handleEdit}>
                                        {isEdit ? "Save Profile" : "Edit Profile"}
                                    </Button>
                                </div>
                            }
                        >
                            {`${formData.firstName} ${formData.lastName}`}
                        </Header>
                    }
                >
                    <Box float="right" textAlign="center">
                        <img src={avatar} alt="Profile Avatar" style={{ width: '150px', height: '150px', borderRadius: '100%' }} />
                        <div>
                            <Button onClick={handleAvatarClick}>Update Image</Button>
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                onChange={handleAvatarChange}
                            />
                        </div>
                    </Box>
                    <div>
                        <ProgressBar label="Opportunities applied" value={32} />
                        <ProgressBar label="Opportunities won:" value={26} />
                        <ProgressBar label="Current opportunities:" value={6} />
                        <ProgressBar label="Pass Cert:" value={92} />
                        <ProgressBar label="Salary:" value={62} />
                    </div>
                </Container>

                <Box margin={{ top: 'm' }} padding={{ top: 'm' }} textAlign="center">
                    <SpaceBetween size="m" direction="horizontal">
                        <Button onClick={() => navigator.clipboard.writeText(profileUrl)}>Copy Profile Link</Button>
                        <Popover
                            triggerType="custom"
                            content={<div>View your public profile</div>}
                        >
                            <Button href={profileUrl} target="_blank" rel="noopener noreferrer">View Public CV Profile</Button>
                        </Popover>
                    </SpaceBetween>
                    <div style={{ marginTop: '10px' }}>
                        <a href={profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>
                            {profileUrl}
                        </a>
                    </div>
                </Box>

                <Tabs
                    tabs={[
                        {
                            label: "View Profile",
                            id: "view-profile",
                            content: (
                                <Form onSubmit={handleFormSubmit}>
                                    <SpaceBetween size="m">
                                        <FormField label="First Name">
                                            <Input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={(event) => handleInputChange('firstName', event.detail.value)}
                                                disabled={!isEdit}
                                            />
                                        </FormField>
                                        <FormField label="Last Name">
                                            <Input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={(event) => handleInputChange('lastName', event.detail.value)}
                                                disabled={!isEdit}
                                            />
                                        </FormField>
                                        <FormField label="Phone Number">
                                            <Input
                                                type="tel"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={(event) => handleInputChange('phoneNumber', event.detail.value)}
                                                disabled={!isEdit}
                                            />
                                        </FormField>
                                        <FormField label="Email Address">
                                            <Input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={(event) => handleInputChange('email', event.detail.value)}
                                                disabled={!isEdit}
                                            />
                                        </FormField>
                                        <FormField label="City">
                                            <Input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={(event) => handleInputChange('city', event.detail.value)}
                                                disabled={!isEdit}
                                            />
                                        </FormField>
                                        <FormField label="Country">
                                            <Input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={(event) => handleInputChange('country', event.detail.value)}
                                                disabled={!isEdit}
                                            />
                                        </FormField>
                                    </SpaceBetween>
                                </Form>
                            )
                        },
                        {
                            label: "Skill",
                            id: "Skill",
                            content: (
                                <div>
                                    <Tiles />
                                </div>
                            )
                        }
                    ]}
                />

            </SpaceBetween>

            <Modal
                visible={showModal}
                onDismiss={closeModal}
                footer={<Button onClick={closeModal}>Close</Button>}
                header={modalType === 'success' ? 'Success' : 'Error'}
            >
                <Alert
                    type={modalType === 'success' ? 'success' : 'error'}
                    dismissible={false}
                >
                    {alertMessage}
                </Alert>
            </Modal>
        </div>
    );
};

export default ProfilePage;
