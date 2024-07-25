import * as React from "react";
import Tiles from "@cloudscape-design/components/tiles";

export default () => {
    const [value, setValue] = React.useState("item1");

    return (
        <Tiles
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            columns={4}
            items={[
                {
                    label: "Next.js",
                    image: (
                        <img
                            src="/image/nextjs.png" // Replace with the correct path to your image
                            alt="Next.js"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "nextjs"
                },
                {
                    label: "Node.js",
                    image: (
                        <img
                            src="/image/nodejs.png" // Replace with the correct path to your image
                            alt="Node.js"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "nodejs"
                },
                {
                    label: "DevOps",
                    image: (
                        <img
                            src="/image/devops.png" // Replace with the correct path to your image
                            alt="DevOps"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "devops"
                },
                {
                    label: "Linux",
                    image: (
                        <img
                            src="/image/linux.png" // Replace with the correct path to your image
                            alt="Linux"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "linux"
                },
                {
                    label: "AWS",
                    image: (
                        <img
                            src="/image/aws.png" // Replace with the correct path to your image
                            alt="AWS"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "aws"
                },
                {
                    label: "Azure",
                    image: (
                        <img
                            src="/image/azure.png" // Replace with the correct path to your image
                            alt="Azure"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "azure"
                },
                {
                    label: "Google Cloud",
                    image: (
                        <img
                            src="/image/gcp.png" // Replace with the correct path to your image
                            alt="Google Cloud"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "googlecloud"
                },
                {
                    label: "AI",
                    image: (
                        <img
                            src="/image/ai.jpg" // Replace with the correct path to your image
                            alt="AI"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ),
                    value: "ai"
                }
            ]}
            readOnly
        />
    );
}
