"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({cabin,user}) {
   const { range,resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount,id } = cabin;
  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
    
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className='scale-[1.01] h-[400px] w-[800px]'>
      <div className='flex flex-col justify-between bg-primary-800 text-primary-300'>
        <div className="flex items-center justify-between mx-6 my-5 mb-5">
        <p>Logged in as</p>

         <div className='flex gap-3'>
          <img
            // Important to display google profile images
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
          </div> 
          </div>
      {/* <p>{String(range.from)} to {String(range.to)}</p> */}
      
        <form
          // action={createBookingWithData}
          action={async (formData) => {
            await createBookingWithData(formData);
            resetRange();
          }}
          className='flex flex-col gap-5 px-20 py-8 text-md bg-primary-900'>
        <div className='space-y-3'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='w-full py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='mt-3 space-y-3'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='w-full px-5 py-5 rounded-sm shadow-sm bg-primary-200 text-primary-800'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex items-center justify-between gap-3 mt-4 py-7'>
            {!(startDate || endDate) ?
              (
          <p className=' text-primary-300'>Start by selecting dates</p>
              ):(

                <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
              )
        }
        </div>
      </form>
      </div>
    </div>
  );
}


export default ReservationForm;
