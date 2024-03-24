import PropTypes from "prop-types";

export const Header = ({ onOpenNav }) => {
    return (
        <>
            {onOpenNav}
            This is Header
        </>
    )
}

Header.propTypes = {
    onOpenNav: PropTypes.func,
};