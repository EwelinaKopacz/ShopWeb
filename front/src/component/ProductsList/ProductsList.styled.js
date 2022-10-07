import styled from 'styled-components';

const StyledProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row dense;
    gap:10rem 4rem;
`;

export default StyledProductsList;