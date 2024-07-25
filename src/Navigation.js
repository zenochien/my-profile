import * as React from "react";
import { SideNavigation, Badge, SideNavigationProps } from "@cloudscape-design/components";
import { WIKI_LABEL, WIKI_LINK } from "./page/CustomHomeHeader/consts";
import { AuthContext } from "./App";

export const Navigation: React.FC<SideNavigationProps> = (props) => {
  const { loginSuccess } = React.useContext(AuthContext);
  const isDev = import.meta.env ? import.meta.env.DEV : false;

  const navItems: SideNavigationProps.Item[] = [

    loginSuccess && { type: "link", text: "Check-in List", href: "#/events/contentdashboard" },
    loginSuccess && { type: "link", text: "Check text", href: "#/checktext" },
    loginSuccess && { type: "link", text: "File Update", href: "#/uploaddownload" },
    loginSuccess && { type: "link", text: "Data with Table", href: "#/datatable" },
    loginSuccess && { type: "link", text: "Create S3", href: "#/creates3" },
    loginSuccess && { type: "link", text: "Run S3", href: "#/runs3" },
    loginSuccess && { type: "link", text: "My Profile", href: "#/myprofile" },
    { type: "divider" },
    { type: "link", text: WIKI_LABEL, href: WIKI_LINK, external: true },
  ].filter(Boolean); // Remove null values

  if (isDev) {
    navItems.push(
      { type: "divider" },
      { type: "link", text: "Environment info", href: "/env", info: <Badge color="blue">DEV</Badge> }
    );
  }

  return (
    <SideNavigation
      activeHref={document.location.hash}
      items={navItems}
      header={{ href: "#/home", text: "Dashboard" }}
      toolsHide={true}
      {...props}
    />
  );
};

export default Navigation;
