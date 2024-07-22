import React from 'react';
import {
    AppLayout,
    SideNavigation,
    Header,
    ContentLayout,
    Container,
    Box,
} from '@cloudscape-design/components';

function CustomAppLayout() {
    return (
        <AppLayout
            navigation={
                <SideNavigation
                    header={{ text: 'My App', href: '/' }}
                    items={[
                        { type: 'link', text: 'Home', href: '/' },
                        { type: 'link', text: 'Profile', href: '/profile' },
                        { type: 'link', text: 'Settings', href: '/settings' },
                    ]}
                />
            }
            content={
                <ContentLayout
                    header={<Header variant="h1">Welcome to My App</Header>}
                >
                    <Container header={<Header variant="h2">Main Content</Header>}>
                        <Box padding={{ vertical: 'l' }}>
                            This is the main content area.
                        </Box>
                    </Container>
                </ContentLayout>
            }
            toolsHide={true}
        />
    );
}

export default CustomAppLayout;
