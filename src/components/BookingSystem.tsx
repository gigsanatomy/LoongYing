import React, { useState } from 'react';
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { Calendar, Clock, Check } from 'lucide-react';

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

export default function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 3000);
    }
  };

  const nextSevenDays = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i + 1));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-semibold mb-6">Book Your Treatment Session</h3>
      
      <form onSubmit={handleBooking} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {nextSevenDays.map((date) => (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => setSelectedDate(date)}
                className={`p-3 rounded-lg border text-sm flex flex-col items-center gap-1 transition-all ${
                  selectedDate?.toDateString() === date.toDateString()
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'border-gray-200 hover:border-green-500'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{format(date, 'EEE')}</span>
                <span className="font-semibold">{format(date, 'd MMM')}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border text-sm flex items-center justify-center gap-2 transition-all ${
                    selectedTime === time
                      ? 'bg-green-50 border-green-500 text-green-700'
                      : 'border-gray-200 hover:border-green-500'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!selectedDate || !selectedTime}
          className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
            isBooked 
              ? 'bg-green-500 text-white' 
              : !selectedDate || !selectedTime
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isBooked ? (
            <>
              <Check className="w-5 h-5" />
              Booking Confirmed!
            </>
          ) : (
            'Book Appointment'
          )}
        </button>
      </form>
    </div>
  );
}