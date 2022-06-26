import StyledButton from './styled';

export default function Button({value, type = 'button', ...props}) {
	return (
		<StyledButton type={type} {...props}>
			{value}
		</StyledButton>
	);
}

Button.propTypes = {};
