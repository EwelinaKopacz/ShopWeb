import styled from 'styled-components';

const StyledProductSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: row dense;
    gap:10rem 4rem;
`;

export default StyledProductSection;