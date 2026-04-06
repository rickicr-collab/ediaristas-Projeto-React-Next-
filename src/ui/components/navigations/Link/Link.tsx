import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

type Props = NextLinkProps & Omit<MuiLinkProps, 'href' | 'component'> & {
    children: React.ReactNode;
    Component?: React.ElementType;
    
}

const Link: React.FC<Props> = ({children, href, sx, Component, ...props}) => {
    return (
        <MuiLink component={Component || NextLink} href={href}  {...props} sx={{cursor: 'pointer', ...sx}} >
            {children}
        </MuiLink>
    )
}

export default Link;