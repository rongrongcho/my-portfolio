type SectionId = 'profile' | 'projects' | 'career'

type HeaderProps = {
  activeSection: SectionId
  onNavigate: (section: SectionId) => void
}

const navItems: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Lee Chorong' },
  { id: 'projects', label: 'Projects' },
  { id: 'career', label: 'Career' },
]

function Header({ activeSection, onNavigate }: HeaderProps) {
  return (
    <header className="header">
      <nav className="header-nav" aria-label="Section Navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${activeSection === item.id ? 'is-active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
