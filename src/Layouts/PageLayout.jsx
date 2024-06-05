import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/AuthForm/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {
    // useLocation Returns the current location object, which represents the current URL in web browsers.
    const {pathname} = useLocation()
  return (
    <Flex>
      {/* Sidebar on the left if path name is auth return null */}
    {pathname !== "/auth" ? (
        <Box w={{base:"70px", md: "240px"}}>
        <Sidebar/>
    </Box>
    ) : null}
      {/* page Content on the right */}
      <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout
