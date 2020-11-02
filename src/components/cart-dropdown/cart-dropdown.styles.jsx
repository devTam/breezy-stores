import styled from 'styled-components';
import CustomBtn from '../custom-btn/custom-btn.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
height: 240px;
display: flex; 
flex-direction: column;
overflow: scroll;
`

export const CustomButtonContainer = styled(CustomBtn)`
margin-top: auto;
`
