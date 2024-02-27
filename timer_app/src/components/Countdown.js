import React, { useState, useEffect } from 'react';

export default function Countdown({ hours, minutes, seconds }) {
  const convertedHours = parseInt(hours, 10);
  const convertedMinutes = parseInt(minutes, 10);
  const convertedSeconds = parseInt(seconds, 10);

  const [updatedHours, setUpdatedHours] = useState(convertedHours);
  const [updatedMinutes, setUpdatedMinutes] = useState(convertedMinutes);
  const [updatedSeconds, setUpdatedSeconds] = useState(convertedSeconds);

  useEffect(() => {
    // converts hours, mins, secs from user input into milliseconds
    let durationInMilliseconds = (convertedHours * 3600 + convertedMinutes * 60 + convertedSeconds) * 1000;

    const intervalId = setInterval(() => {
		if (durationInMilliseconds >= 0){

		
      		// calculates hours, mins, and secs from milliseconds
      		const countdownHours = Math.floor(durationInMilliseconds / (1000 * 60 * 60));
      		const countdownMinutes = Math.floor((durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
      		const countdownSeconds = Math.floor((durationInMilliseconds % (1000 * 60)) / 1000);

      		setUpdatedHours(countdownHours);
      		setUpdatedMinutes(countdownMinutes);
      		setUpdatedSeconds(countdownSeconds);

      		// decrements by 1 second
      		durationInMilliseconds -= 1000;

      		// countdown in console
      		console.log(countdownHours, ":", countdownMinutes, ":", countdownSeconds);
		};
	}, 1000);
		

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [convertedHours, convertedMinutes, convertedSeconds]);

  return (
    <div>
      <h2>
        {/* rendering the live dynamic countdown after converting to a string */}
        {String(updatedHours).padStart(2, '0')}:{String(updatedMinutes).padStart(2, '0')}:{String(updatedSeconds).padStart(2, '0')}
      </h2>
    </div>
  );
}


//next steps, render list so timers do not restart when new item added