import useAsync from "../useAsync";

import * as reservationApi from '../../services/reservationapi';

export default function usePostIndividualBooking(){
    const {
        loading: postIndividualBookingLoading,
        error: postIndividualBookingError,
        act:postIndividualBooking,
    } = useAsync(reservationApi.postBooking, false);

    return{
        postIndividualBookingLoading,
        postIndividualBookingError,
        postIndividualBooking,
    }
}