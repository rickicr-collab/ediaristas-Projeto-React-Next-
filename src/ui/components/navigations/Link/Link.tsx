import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import * as React from 'react';

type Props = NextLinkProps &
  Omit<MuiLinkProps, 'href' | 'component'> & {
    children?: React.ReactNode;
    component?: React.ElementType;
  };

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  function Link(props, ref) {
    const { children, href, sx, component, ...rest } = props;

    return (
      <MuiLink
        ref={ref}
        component={component || NextLink}
        href={href}
        {...rest}
        sx={{ cursor: 'pointer', ...sx }}
      >
        {children}
      </MuiLink>
    );
  }
);

export default Link;