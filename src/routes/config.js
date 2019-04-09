import { TourDetailPage, TourPage, HomePage, PlacePage, PlaceDetailPage, HousePage, HouseDetailPage, RestaurantPage, RestaurantDetailPage } from '../components/pages/dashboard';
import { LoginPage, RegisterPage } from '../components/pages/login';
export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
        key: "dashbard-home",
    },
    {
        path: '/dashboard/place',
        exact: true,
        component: PlacePage,
        key: "dashboard-place"
    },
    {
        path: '/dashboard/place/detail',
        exact: true,
        component: PlaceDetailPage,
        key: "dashboard-place-detail"
    },
    {
        path: '/dashboard/house',
        exact: true,
        component: HousePage,
        key: "dashboard-house"
    },
    {
        path: '/dashboard/house/details',
        exact: true,
        component: HouseDetailPage,
        key: "dashboard-house-detail"
    },
    {
        path: '/dashboard/restaurants',
        exact: true,
        component: RestaurantPage,
        key: "dashboard-restaurant"
    },
    {
        path: '/dashboard/restaurants/detail',
        exact: true,
        component: RestaurantDetailPage,
        key: "dashboard-restaurant-detail"
    },
    {
        path: '/dashboard/tour',
        exact: true,
        component: TourPage,
        key: "dashboard-tour"
    },
    {
        path: '/dashboard/tour/detail/',
        exact: true,
        component: TourDetailPage,
        key: "dashboard-tour-detail"
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        key: "login"
    },
    {
        path: '/register',
        exact: true,
        component: RegisterPage,
        key: "register"
    }
]