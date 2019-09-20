import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

export default createAppContainer (
    createStackNavigator({
        Main,
        Product
    }, {
        defaultNavigationOptions: {
            headerStyle: {
            backgroundColor: "rgb(18, 15, 209)"
        },
        headerTintColor:  "#FFF"
        }
    })
);