const paths = {
  'structured-cabling': 'M4 4h16v6H4z M7 7h1m3 0h1m3 0h2 M7 10v6h10v-6 M12 16v4 M8 20h8',
  'wifi-network': 'M3 8a15 15 0 0 1 18 0 M6 12a10 10 0 0 1 12 0 M9 16a5 5 0 0 1 6 0 M12 20h.01',
  'endpoint-security': 'M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z M8 12l3 3 5-6',
  'windows-support': 'M3 4h18v13H3z M8 21h8 M12 17v4 M7 8h4v5H7z M14 8h3m-3 4h3',
  'business-pos': 'M5 3h14v11H5z M8 7h8 M8 10h4 M5 14l-2 7h18l-2-7 M8 18h8',
};
export default function ServiceIcon({ kind }) {
  return <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}
