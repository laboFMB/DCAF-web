import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomeIcon from '@mui/icons-material/Home'
import DataIcon from '@mui/icons-material/QueryStats'

const NavDiv = styled.nav`
  width: 50px;
  min-height: 100%;
  background-color: black;
`

const LinkDiv = styled.div<{ active: boolean }>`
  &:hover {
    cursor: pointer;
    background-color: # !important;
    color: black !important;
  }

  ${({ active }) =>
    active &&
    `
background-color: #04AA6D !important;
color: white !important;
  `}
`

export const NavBar = () => {
  const location = useRouter()
  return (
    <NavDiv>
      <LinkDiv active={location.pathname === '/'}>
        <Link href="/">
          <HomeIcon sx={{ color: 'white', padding: '8px' }} fontSize="large" />
        </Link>
      </LinkDiv>
      <LinkDiv active={location.pathname === '/data'}>
        <Link href="/data">
          <DataIcon sx={{ color: 'white', padding: '8px' }} fontSize="large" />
        </Link>
      </LinkDiv>
    </NavDiv>
  )
}
