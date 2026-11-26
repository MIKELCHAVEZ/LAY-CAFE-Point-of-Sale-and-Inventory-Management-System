/* Line-art icons, same hand-drawn feel as the brand doodles */
const LEGACY_ICONS = {
  Coffee: (<>
    <ellipse cx="12" cy="12" rx="6" ry="9" transform="rotate(35 12 12)" />
    <path d="M8.5 7c3 2 1 4 4 5s1 4 3.5 5" />
  </>),
  Drink: (<>
    <path d="M7 5h10l-1.2 14a1.5 1.5 0 0 1-1.5 1.4h-4.6A1.5 1.5 0 0 1 8.2 19z" />
    <path d="M13 5l2-3" />
    <path d="M7.6 11h8.8" />
  </>),
  Pasta: (<>
    <circle cx="12" cy="12" r="2.5" />
    <path d="M4.5 12a7.5 7.5 0 0 1 15 0" />
    <path d="M7.5 17.5a6 6 0 0 0 10-4" />
    <path d="M6 9.5a6.5 6.5 0 0 1 4-3.5" />
  </>),
  Bread: (<path d="M6 9a3 3 0 0 1 1-5.5c1-.7 2-.5 3 0h4c1-.5 2-.7 3 0A3 3 0 0 1 18 9v10a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19z" />),
  Rice: (<>
    <path d="M4 11h16a8 8 0 0 1-16 0z" />
    <path d="M8 20.5h8" />
    <path d="M9 8c0-1.2 1-1.2 1-2.5M13 8c0-1.2 1-1.2 1-2.5" />
  </>),
  Snack: (<>
    <path d="M7 9l1 11h8l1-11z" />
    <path d="M9 9V4M12 9V3M15 9V4" />
  </>),
  Sweets: (<>
    <path d="M12 7.5c-5 0-7 3-6 7 1 4 4 6.5 6 6.5s5-2.5 6-6.5c1-4-1-7-6-7z" />
    <path d="M9 4.5l3 3 3-3" />
    <path d="M10 12v.01M14 12v.01M12 15.5v.01" />
  </>),
  Plus: (<>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v8M8 12h8" />
  </>),
  Clover: (<>
    <circle cx="9" cy="9" r="3.5" />
    <circle cx="15" cy="9" r="3.5" />
    <circle cx="9" cy="15" r="3.5" />
    <circle cx="15" cy="15" r="3.5" />
  </>),
};
const forms = {
  grid: <>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </>,
  cart: <>
    <circle cx="9" cy="20" r="1" />
    <circle cx="19" cy="20" r="1" />
    <path d="M2 3h2l2.8 12h12l2.2-9H5" />
  </>,
  coffee: <>
    <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
    <path d="M17 10h2a3 3 0 1 1 0 6h-2M8 4v2M12 3v3" />
  </>,
  box: <>
    <path d="m3 7 9-4 9 4v10l-9 4-9-4V7Z" />
    <path d="m3 7 9 4 9-4M12 11v10" />
  </>,
  list: <>
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </>,
  kitchen: <>
    <path d="M5 21V7a7 7 0 0 1 14 0v14M2 21h20M9 10v7M12 9v8M15 10v7" />
  </>,
  clock: <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
  logout: <>
    <path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5" />
    <path d="m14 8 4 4-4 4M8 12h10" />
  </>,
  search: <>
    <circle cx="11" cy="11" r="7" />
    <path d="m16 16 5 5" />
  </>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  check: <path d="m4 12 5 5L20 6" />,
  arrow: <path d="m5 12 14 0m-6-6 6 6-6 6" />,
  refresh: <>
    <path d="M20 6v5h-5M4 18v-5h5" />
    <path d="M6.5 8A7 7 0 0 1 19 11M5 13a7 7 0 0 0 12.5 3" />
  </>,
  edit: <>
    <path d="M4 20h4l11-11-4-4L4 16zM13 7l4 4" />
  </>,
  trash: <>
    <path d="M4 7h16M10 4h4M7 7l1 13h8l1-13M10 11v6M14 11v6" />
  </>,
  alert: <>
    <path d="M12 3 2 21h20L12 3Z" />
    <path d="M12 9v5M12 18h.01" />
  </>,
  trend: <>
    <path d="m3 17 7-7 4 4 7-8M15 6h6v6" />
  </>,
  filter: <>
    <path d="M3 5h18M7 12h10M10 19h4" />
  </>,
  receipt: <>
    <path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3zM9 8h6M9 12h6M9 16h3" />
  </>,
  user: <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </>,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  settings: <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
  </>,
  print: <>
    <path d="M6 8V3h12v5M6 17H4V9h16v8h-2M6 14h12v7H6z" />
  </>,
};
const aliases = {
  Coffee: 'coffee',
  Drink: 'coffee',
  Pasta: 'list',
  Bread: 'box',
  Rice: 'box',
  Snack: 'box',
  Sweets: 'coffee',
  Plus: 'plus',
  Clover: 'grid'
};
// Retains the original <Icon name="Coffee"/> API and adds navigation icon names.
export default function Icon({ name, size = 22, className = '' }) {
  return <svg
    className={`icon ${className}`.trim()}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {LEGACY_ICONS[name] || forms[name] || forms[aliases[name]] || forms.coffee}
  </svg>;
}
