import useAsync from "../useAsync";

import * as reservationApi from '../../services/reservationapi';

export default function usePostSchoolBooking(){
    const {
        loading: postSchoolBookingLoading,
        error: postSchoolBookingError,
        act:postSchoolBooking,
    } = useAsync(reservationApi.postBooking, false);

    return{
        postSchoolBookingLoading,
        postSchoolBookingError,
        postSchoolBooking,
    }
}