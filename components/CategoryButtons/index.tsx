import Link from "next/link"

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styled from "styled-components"
import React from "react";


const Container = styled.div`
background-color:#555 ;
color:#fff ;
padding: 8px;

border-radius: 8px;

box-shadow: 0 0 9px 0px #ddd;

a{
  background-color: #8257e5;
  color: #fff;
  border-radius: 8px;
}
`



function CategoryButtons ({ categories = [] }) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className="container flex flex-wrap mx-auto gap-2 mt-8">
      {categories.map((_category) => (
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {_category.name}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>

      ))}
    </Container>
  )
}

export default CategoryButtons



