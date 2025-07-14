export default function formatDateTime(date) {
  const d = new Date(date);

  const optionsDate = { month: 'long', day: 'numeric', year: 'numeric' };
  const optionsTime = { hour: 'numeric', minute: '2-digit', hour12: true };

  const datePart = d.toLocaleDateString('en-US', optionsDate);
  const timePart = d.toLocaleTimeString('en-US', optionsTime);

  return `${datePart} · ${timePart}`;
}
