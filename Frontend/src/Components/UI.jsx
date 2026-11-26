import Icon from './Icon';
export function Heading({ eyebrow, title, description, actions }) {
  return <div className="page-heading">
    <div>
      <div className="eyebrow">
        {eyebrow}
      </div>
      <h1>
        {title}
      </h1>
      {description && <p>
        {description}
      </p>}
    </div>
    {actions && <div className="heading-actions">
      {actions}
    </div>}
  </div>;
}
export function Notice({ message, type = 'error', onClose }) {
  if (!message)
    return null;
  return <div role={type === 'error' ? 'alert' : 'status'} className={`notice-bar ${type}`}>
    <Icon name={type === 'error' ? 'alert' : 'check'} size={18} />
    <span>
      {message}
    </span>
    {onClose && <button className="icon-button" onClick={onClose} aria-label="Dismiss">
      <Icon name="close" size={16} />
    </button>}
  </div>;
}
export function Empty({ icon = 'coffee', title = 'Nothing here yet', description }) {
  return <div className="empty-state">
    <div className="empty-icon">
      <Icon name={icon} size={28} />
    </div>
    <strong>
      {title}
    </strong>
    <p>
      {description}
    </p>
  </div>;
}
export function Stat({ icon, value, label, sub, tone = '' }) {
  return <div className={`stat-card ${tone}`}>
    <div className="stat-icon">
      <Icon name={icon} size={21} />
    </div>
    <div className="stat-main">
      <span>
        {label}
      </span>
      <strong>
        {value}
      </strong>
      <small>
        {sub}
      </small>
    </div>
  </div>;
}
export function Modal({ title, subtitle, onClose, children, wide = false }) {
  return <div
    className="modal-backdrop"
    onMouseDown={e => {
      if (e.target === e.currentTarget)
        onClose();
    }}
    role="presentation"
  >
    <section
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className={`modal-card ${wide ? 'wide' : ''}`}
    >
      <div className="modal-heading">
        <div>
          <h2>
            {title}
          </h2>
          {subtitle && <p>
            {subtitle}
          </p>}
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Close dialog">
          <Icon name="close" />
        </button>
      </div>
      {children}
    </section>
  </div>;
}
