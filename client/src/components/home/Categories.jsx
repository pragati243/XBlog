import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
border: '1px solid rgba(224, 224, 224, 1)',
[theme.breakpoints.down('sm')]: {
  // Apply different styles on smaller screens
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: linear-gradient(135deg, #FF416C, #FF4B2B);
  color: #fff;
`;

const StyledLink = styled(Link)`
margin-left: 16px;
text-decoration: none;
color: black;
font-weight: 600;
transition: color 0.3s ease-in-out;

&:hover {
  color: #ff6f00;
}
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;