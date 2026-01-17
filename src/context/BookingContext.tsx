import { createContext, useContext, useState, ReactNode } from 'react';
import BookingDialog from '../components/common/BookingDialog';

interface BookingContextType {
  openBooking: () => void;
  closeBooking: () => void;
  isBookingOpen: boolean;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <BookingContext.Provider
      value={{ openBooking, closeBooking, isBookingOpen }}
    >
      {children}
      <BookingDialog open={isBookingOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
