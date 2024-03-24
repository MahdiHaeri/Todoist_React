import PropTypes from "prop-types";

export const NavDrawer = ({ openNav, onCloseNav }) => {
    return (
        <>
            This is NavDrawer
        </>
    )
}

NavDrawer.propTypes = {
    openNav: PropTypes.bool,
    onCloseNav: PropTypes.func,
};