import {Button as ButtonMU, ButtonPropsVariantOverrides, SxProps} from "@mui/material"
import { Theme } from "@mui/system";
import { OverridableStringUnion } from '@mui/types';
interface IButton {
    onClick:()=>void;
    startIcon: React.ReactNode;
    sx: SxProps<Theme>;
    variant?: OverridableStringUnion<'text' | 'outlined' | 'contained',ButtonPropsVariantOverrides>;
    children: string | React.ReactNode
}

export const Button:React.FC<Partial<IButton>> =({onClick, startIcon,sx,variant,children})=> {
    return(
        <ButtonMU
            onClick={onClick}
            startIcon={startIcon}
            sx={sx}
            variant={variant}
          >
           {children}
          </ButtonMU>
    )
}