import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
				background: none;
				border: 1px solid ${selected};
				color: ${selected};
				&:hover {
					background: ${selected}
					color: white;
				}
			`}
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyles = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margint-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* common */
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  /* size */
	${sizeStyles}
	
  /* color */
  ${colorStyles}
	
  /* etc */
  & + & {
		margin-left: 1rem;
	}
	
	${fullWidthStyles}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
