import React from "react";
import "./TicketBooked.css";
import QRIMAGE from "../../image/QR_image.png";

const TicketBooked = ({ Getseats, slectbook }) => {
  console.log(Getseats, "Getseats");
  console.log(slectbook, "slectbook");
// Create a new Date object
var currentDate = new Date();

// Get the current date and time
var currentYear = currentDate.getFullYear();
var monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var currentMonth = monthNamesShort[currentDate.getMonth()];
var currentDay = currentDate.getDate();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();

// Convert to 12-hour format
var ampm = currentHour >= 12 ? 'PM' : 'AM';
currentHour = currentHour % 12;
currentHour = currentHour ? currentHour : 12; // If hour is 0, set it to 12

// Display the current date and time in 12-hour format with the first three letters of the month name
console.log();
  return (
    <div className="TicketBooked-body ">
      <div className="TicketBooked-full-div ">
        {slectbook.map((movie) => (
          <div className="TicketBooked-top-div d-flex">
            <div className="TicketBooked-top-left-div">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                className="TicketBooked-img"
                alt="..."
              />
            </div>
            <div className="TicketBooked-top-right-div">
              <div className="TicketBooked-movie-title">{movie.title}</div>
              <div className="TicketBooked-movie-language">
                {movie.original_language}, 2D
              </div>
              <div className="TicketBooked-movie-date"> Ticket booked{" "} : {currentDay + "-" + currentMonth + "-" + currentYear + " " +" | "+ currentHour + ":" + currentMinute+ " " + ampm}</div>
              <div className="TicketBooked-movie-theater">
                TN theater A/C 4K Screen 4.1 Dolby Audio
              </div>
            </div>
          </div>
        ))}
        <div className="TicketBooked-suppor-detail">
          Tap for support, details & more actions
        </div>

        <div className="d-flex TicketBooked-bottom-div">
          <div className="TicketBooked-bottom-left-div">
            <img src={QRIMAGE} alt="" className="TicketBooked-qr-code" />
          </div>
          <div className="TicketBooked-bottom-right-div">
            <div className="TicketBooked-ticket-count">ticket : {Getseats.length} </div>
            <div className="d-flex justify-content-center TicketBooked-seats-num">
              <div>seats : &nbsp;</div>
              {Getseats.map((seat) => (
                <>
                  <div>{seat.seatnum},</div>
                </>
              ))}
            </div>
            {slectbook.map((movie) => (
              <div className="TicketBooked-bookid-div">
                <span className="TicketBooked-bookid-span">BOOKING ID :</span>{" "}
                TNTS{movie.id}
              </div>
            ))}
          </div>
        </div>
        <div className="TicketBooked-suppor-detail">
          Cancellation avilable : cut-off time of 4 hrs before showtime
        </div>
        <div className="d-flex justify-content-between TicketBooked-total">
          <div>Total Amount :</div>
          <div className="TicketBooked-total-amount">Rs.{Getseats.length * 180}</div>
        </div>
      </div>
    </div>
  );
};

export default TicketBooked;
