//функция принимает время рабочего дня, время старта и продолжительность встречи; проверяет попадает ли встреча в рабочее время

const MINUTES_PER_HOUR = 60;

const transformTimeInMinutes = (time) => {
  const timeArray = time.split(':').map(Number);
  const timeInMinutes = timeArray[0] * MINUTES_PER_HOUR + timeArray[1];
  return timeInMinutes;
};

const isWorkingTime = (startWork, endWork, startMeeting, durationMeeting) => {
  const startWorkTime = transformTimeInMinutes(startWork);
  const endWorkTime = transformTimeInMinutes(endWork);
  const startMeetingTime = transformTimeInMinutes(startMeeting);
  return (startWorkTime <= startMeetingTime && startMeetingTime + durationMeeting <= endWorkTime);
};

isWorkingTime();
