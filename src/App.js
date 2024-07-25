import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppLayout, BreadcrumbGroup } from "@cloudscape-design/components";
import Navigation from "./Navigation";
import "@cloudscape-design/global-styles/index.css";
import Home from "./page/home";
import { Contentdashboard } from "./events/contentdashboard";
import CustomHomeHeader from "./page/CustomHomeHeader/CustomHomeHeader";
import CheckText from "./page/checktext";
import SignInUp from "./page/signinup";
import UploadAndDownmload from "./page/uploaddownload";
import DataTable from "./page/datatable";
import CreateS3 from "./page/creates3";
import RunS3 from "./page/runs3";
import TopNavigationComponent from "./page/topnavigation";
import ProfilePage from "./page/myprofile";
import Logins from "./page/signinup/Login";
import Registers from "./page/signinup/Register";

export const AuthContext = createContext();

export default function App() {
  const [contentHeader, setContentHeader] = useState(null);
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);
  const [isToolsHidden, setIsToolsHidden] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const location = useLocation();


  const getBreadcrumbItems = () => {
    switch (location.pathname) {
      case "/home":
        return [
          { text: 'Home', href: '/' },
          { text: 'Home', href: '/home' },
        ];
      case "/checktext":
        return [
          { text: 'Home', href: '/' },
          { text: 'Check Text', href: '/checktext' }
        ];
      case "/signinup":
        return [
          { text: 'Home', href: '/' },
          { text: 'Sigin up and sigin in', href: '/signinup' }
        ];
      case "/uploaddownload":
        return [
          { text: 'Home', href: '/' },
          { text: 'File Updata and Download', href: '/uploaddownload' }
        ];
      case "/datatable":
        return [
          { text: 'Home', href: '/' },
          { text: 'Data with Table', href: '/datatable' }
        ];
      case "/creates3":
        return [
          { text: 'Home', href: '/' },
          { text: 'Create S3', href: '/create s3' }
        ];
      case "/runs3":
        return [
          { text: 'Home', href: '/' },
          { text: 'Run S3', href: '/runs3' }
        ];
      case "/events/contentdashboard":
        return [
          { text: 'Home', href: '/' },
          { text: 'Dashboard Content', href: '/events/contentdashboard' }
        ];
      case "/myprofile":
        return [
          { text: 'Home', href: '/' },
          { text: 'My Profile', href: '/myprofile' }
        ];
      default:
        return [{ text: 'Home', href: '/' }];
    }
  };



  return (
    <AuthContext.Provider value={{ registrationSuccess, setRegistrationSuccess, loginSuccess, setLoginSuccess }}>

      <TopNavigationComponent />
      <AppLayout
        navigationOpen={isNavigationOpen}
        toolsHide={isToolsHidden}
        onNavigationChange={() => setIsNavigationOpen(!isNavigationOpen)}
        onToolsChange={() => setIsToolsHidden(!isToolsHidden)}
        navigation={<Navigation />}
        contentHeader={<CustomHomeHeader />}
        content={
          <>
            <BreadcrumbGroup items={getBreadcrumbItems()} />
            <Routes>
              <Route path="/home" element={<Home setContentHeader={setContentHeader} />} />
              <Route path="/checktext" element={<CheckText setContentHeader={setContentHeader} />} />
              <Route path="/signinup" element={<SignInUp setContentHeader={setContentHeader} />} />
              <Route path="/uploaddownload" element={<UploadAndDownmload setContentHeader={setContentHeader} />} />
              <Route path="/datatable" element={<DataTable setContentHeader={setContentHeader} />} />
              <Route path="/creates3" element={<CreateS3 setContentHeader={setContentHeader} />} />
              <Route path="/runs3" element={<RunS3 setContentHeader={setContentHeader} />} />
              <Route path="/events/contentdashboard" element={<Contentdashboard setContentHeader={setContentHeader} />} />
              <Route path="/myprofile" element={<ProfilePage setContentHeader={setContentHeader} />} />
              <Route path="/signinup/Register" element={<Registers setContentHeader={setContentHeader} />} />
              <Route path="/signinup/Login" element={<Logins setContentHeader={setContentHeader} />} />

              <Route exact path="/" element={<Navigate to="/signinup/login" />} />
            </Routes>
          </>
        }
      />
    </AuthContext.Provider>
  );
}
