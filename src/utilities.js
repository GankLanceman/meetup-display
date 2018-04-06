const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const formatDate = (date) => {
  return `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]}, ${date.getFullYear()} @${date.toLocaleTimeString()}`
}