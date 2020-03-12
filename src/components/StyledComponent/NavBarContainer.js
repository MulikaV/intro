import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    width: 60%; 
    

padding: 1rem 1rem;
    margin-right: auto;
    margin-left: auto;
    background-color: #343a40;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;


export const NavBarLink = styled.a`
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: #fff;
    text-decoration: none;    
    &:hover {
    text-decoration: none;
    color: #fff;
    }

`;

export const NavBarUl = styled.ul`
display: flex;
padding-left: 0;
margin-bottom: 0;
list-style: none;

`;

export const NavBarLi =styled.li`
display: ;

`;