import styled from 'styled-components';

const CoolButton = styled.button({
    fontWeight: '600',
    fontSize: '1rem',
    padding: '1rem',
    cursor: 'pointer',
    background: 'none',
    color: 'red',
    border: '3px solid red',
    borderRadius: '5px',
    transition: '0.2s',
    '&:hover, &:focus': {
        transform: 'translateY(-3px)',
        boxShadow: '0px 3px 5px red'
    }
})
export default CoolButton