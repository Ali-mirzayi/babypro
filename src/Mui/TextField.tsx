import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const CustomInput = styled(TextField)<TextFieldProps>(() => ({
  maxWidth: '200px',
  "& div": { padding: 0,borderRadius: '8px',height: '40px'},
  '& label': {
    transformOrigin: "top right !important",
    right: "1.8rem !important",
    color: '#000000',
  },
  "& legend": {
    textAlign: "right"
  },
  "& textarea": { padding: '8px 14px' }, //!!!!
  "& .MuiFormHelperText-root": { textAlign: "right" },
  '& label.Mui-focused': {
    color: '#000000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#00000',
      // borderRadius: '20px'
    },
    '&:hover fieldset': {
      borderColor: '#000000',
    },
    '&.Mui-focused': {
      borderColor: '#00508e',
      // boxShadow: `${alpha('#00508e', 0.25)} 0 5px 11px 2px`,
      // borderRadius: '20px'
    }, '&.Mui-focused fieldset': {
      borderColor: '#3877ff'
    },
  },
}));
export default function StyledCustomization({ ...props }: any) {
  return (
    <CustomInput
      {...props}
    >{props.children}</CustomInput>);
}