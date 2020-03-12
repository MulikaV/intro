import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #f8f9fa;
    padding-top: ${props =>props.paddingTop || 0};
    padding-bottom: ${props =>props.paddingBottom || 0};
    `;