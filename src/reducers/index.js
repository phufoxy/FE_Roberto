import { combineReducers } from 'redux';
import LoginReducer from './login';
import PlaceReducer from './place';
import PlacedetailReducer from './placedetail';
import HouseReducer from './house';
import HouseDetailReducer from './housedetail';
import RestaurantReducer from './restaurant';
import RestaurantDetailReducer from './restaurantdetail';
import TourReducer from './tour';
import TourDetailReducer from './tourdetail';
import SliderReducer from './slider';
import BlogReducer from './blog';
import BlogDetailReducer from './blogdetail';
const rootReducer = combineReducers({
    login: LoginReducer,
    place: PlaceReducer,
    placedetail: PlacedetailReducer,
    house: HouseReducer,
    housedetail: HouseDetailReducer,
    restaurant: RestaurantReducer,
    restaurantdetail: RestaurantDetailReducer,
    tour: TourReducer,
    tourdetail: TourDetailReducer,
    slider: SliderReducer,
    blog: BlogReducer,
    blogdetail: BlogDetailReducer
});
export default rootReducer;