import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useGetUserQuery } from 'state/api'

const Layout = () => {

  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = useSelector((state) =>  state.global.userId)

  const { data, error, isLoading } = useGetUserQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching user data:", error);
    return <div>Error fetching user data.</div>;
  }

  return <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar 
        user = {JSON.parse(data) || {}} 
        isNonMobile = {isNonMobile}
        drawerWidth="250px"
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}
    />
    <Box flexGrow={1}>
        <Navbar 
          user = {JSON.parse(data) || {}} 
          isSidebarOpen = {isSidebarOpen}
          setIsSidebarOpen = {setIsSidebarOpen} 
        />
        <Outlet />
    </Box>
  </Box>
}

export default Layout