// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItemFunc from 'menu-items';
import { connect } from "react-redux";
import AuthContext from 'AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = (props) => {
	const menuItems = menuItemFunc(props.userSession)
	const navItems = menuItems.items.map((item) => {
		switch (item.type) {
			case 'group':
				return <NavGroup key={item.id} item={item} />;
			default:
				return (
					<Typography key={item.id} variant="h6" color="error" align="center">
						Menu Items Error
					</Typography>
				);
		}
	});

	return <>{navItems}</>;
};

const mapStateToProps = (state) => {
	return {
		userSession: state.userSession,
	};
};

export default connect(mapStateToProps, {  })(MenuList);
