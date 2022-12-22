import styled from "styled-components";
export const NavBar = styled.nav`
    width: 85%;
    display: flex;
    justify-content: center;
`;
export const MenuList = styled.ul`
    width: 55%;
    display: flex;
    justify-content: space-evenly;
`;
export const MenuItem = styled.li`
    width: 15%;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    color: #fff;
    :hover{
        font-weight: 600;
        text-decoration: underline;
    }
`