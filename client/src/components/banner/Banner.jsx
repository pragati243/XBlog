import React from 'react';
import { styled, Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #FFFFFF;
  line-height: 1;
  @media (max-width: 600px) {
    font-size: 48px;
  }
  @media (max-width: 400px) {
    font-size: 36px;
  }
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #FFFFFF;
`;

const Banner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Image>
      <Heading variant={isSmallScreen ? 'h2' : 'h1'}>BLOG</Heading>
      <SubHeading variant="h5">maazapeo</SubHeading>
    </Image>
  );
};

export default Banner;
