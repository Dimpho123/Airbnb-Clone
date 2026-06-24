import axios from 'axios';

export const createBooking =
  (bookingData) =>
  async (dispatch) => {
    try {
      await axios.post(
        'http://localhost:5000/bookings',
        bookingData
      );

      alert('Booking Successful!');
    } catch (error) {
      alert('Booking Failed');
    }
  };