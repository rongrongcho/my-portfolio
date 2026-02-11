import { useCallback, useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import ProfileSection from '../components/ProfileSection'
import ProjectsSection from '../components/ProjectsSection'
import CareerSection from '../components/CareerSection'
import Footer from '../components/Footer'

type SectionId = 'profile' | 'projects' | 'career'

const sectionIds: SectionId[] = ['profile', 'projects', 'career']
const sectionLabels: Record<SectionId, string> = {
  profile: 'Profile',
  projects: 'Projects',
  career: 'Career',
}
const DESKTOP_BREAKPOINT = 1024

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

type HomePageProps = {
  initialSection?: SectionId
}

function HomePage({ initialSection }: HomePageProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('profile')
  const mainRef = useRef<HTMLElement | null>(null)
  const syncRafRef = useRef<number | null>(null)
  const animRafRef = useRef<number | null>(null)
  const isAnimatingRef = useRef(false)
  const lastWheelAtRef = useRef(0)
  const wheelGestureLockedRef = useRef(false)
  const wheelGestureTimerRef = useRef<number | null>(null)
  const currentIndexRef = useRef(0)
  const sectionsRef = useRef<HTMLElement[]>([])
  const pendingDirectionsRef = useRef<Array<1 | -1>>([])

  const hydrateSections = useCallback(() => {
    sectionsRef.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    return sectionsRef.current
  }, [])

  const getClosestIndex = useCallback((scrollTop: number) => {
    const sections = sectionsRef.current
    if (sections.length === 0) {
      return 0
    }

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    sections.forEach((section, index) => {
      const distance = Math.abs(section.offsetTop - scrollTop)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    return closestIndex
  }, [])

  const animateToIndex = useCallback(
    (requestedIndex: number, onComplete?: () => void) => {
      const root = mainRef.current
      const sections = sectionsRef.current.length > 0 ? sectionsRef.current : hydrateSections()
      if (!root || sections.length === 0) {
        onComplete?.()
        return
      }

      const targetIndex = clamp(requestedIndex, 0, sections.length - 1)
      const targetTop = sections[targetIndex].offsetTop
      const startTop = root.scrollTop
      const delta = targetTop - startTop
      const duration = clamp(Math.abs(delta) * 0.21, 110, 280)

      currentIndexRef.current = targetIndex

      if (Math.abs(delta) < 1) {
        root.scrollTop = targetTop
        setActiveSection(sectionIds[targetIndex])
        onComplete?.()
        return
      }

      if (animRafRef.current !== null) {
        cancelAnimationFrame(animRafRef.current)
        animRafRef.current = null
      }

      isAnimatingRef.current = true
      const startedAt = performance.now()
      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

      const step = (now: number) => {
        const elapsed = now - startedAt
        const progress = Math.min(1, elapsed / duration)
        const eased = easeInOutCubic(progress)
        root.scrollTop = startTop + delta * eased

        if (progress < 1) {
          animRafRef.current = requestAnimationFrame(step)
          return
        }

        root.scrollTop = targetTop
        setActiveSection(sectionIds[targetIndex])
        animRafRef.current = null
        isAnimatingRef.current = false
        onComplete?.()
      }

      animRafRef.current = requestAnimationFrame(step)
    },
    [hydrateSections],
  )

  const processNextQueuedMove = useCallback(function processNextQueuedMove() {
    if (isAnimatingRef.current) {
      return
    }

    const direction = pendingDirectionsRef.current.shift()
    if (!direction) {
      return
    }

    const targetIndex = clamp(currentIndexRef.current + direction, 0, sectionIds.length - 1)
    if (targetIndex === currentIndexRef.current) {
      processNextQueuedMove()
      return
    }

    animateToIndex(targetIndex, processNextQueuedMove)
  }, [animateToIndex])

  const handleNavigate = useCallback(
    (section: SectionId) => {
      const targetIndex = sectionIds.indexOf(section)
      if (targetIndex < 0) {
        return
      }
      pendingDirectionsRef.current = []
      animateToIndex(targetIndex)
    },
    [animateToIndex],
  )

  useEffect(() => {
    const root = mainRef.current
    if (!root) {
      return
    }

    hydrateSections()
    const initialIndex = getClosestIndex(root.scrollTop)
    currentIndexRef.current = initialIndex
    setActiveSection(sectionIds[initialIndex])

    const onResize = () => {
      hydrateSections()
      const resizedIndex = getClosestIndex(root.scrollTop)
      currentIndexRef.current = resizedIndex
      setActiveSection(sectionIds[resizedIndex])
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [getClosestIndex, hydrateSections])

  useEffect(() => {
    if (!initialSection) {
      return
    }

    const root = mainRef.current
    if (!root) {
      return
    }

    const targetIndex = sectionIds.indexOf(initialSection)
    if (targetIndex < 0) {
      return
    }

    const moveToTarget = () => {
      const sections = hydrateSections()
      const target = sections[targetIndex]
      if (!target) {
        return
      }

      root.scrollTop = target.offsetTop
      currentIndexRef.current = targetIndex
      setActiveSection(sectionIds[targetIndex])
    }

    moveToTarget()
    const rafId = window.requestAnimationFrame(moveToTarget)
    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [hydrateSections, initialSection])

  useEffect(() => {
    const root = mainRef.current
    if (!root) {
      return
    }

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth <= DESKTOP_BREAKPOINT) {
        return
      }

      if (Math.abs(event.deltaY) < 1) {
        return
      }

      event.preventDefault()
      if (wheelGestureLockedRef.current) {
        return
      }

      const now = performance.now()
      if (now - lastWheelAtRef.current < 12) {
        return
      }
      lastWheelAtRef.current = now

      wheelGestureLockedRef.current = true
      if (wheelGestureTimerRef.current !== null) {
        clearTimeout(wheelGestureTimerRef.current)
      }
      wheelGestureTimerRef.current = window.setTimeout(() => {
        wheelGestureLockedRef.current = false
        wheelGestureTimerRef.current = null
      }, 240)

      const direction = event.deltaY > 0 ? 1 : -1
      const queuedNet = pendingDirectionsRef.current.reduce((sum, value) => sum + value, 0)
      const projectedIndex = clamp(currentIndexRef.current + queuedNet + direction, 0, sectionIds.length - 1)
      if (projectedIndex === clamp(currentIndexRef.current + queuedNet, 0, sectionIds.length - 1)) {
        return
      }

      if (pendingDirectionsRef.current.length >= sectionIds.length - 1) {
        return
      }

      pendingDirectionsRef.current.push(direction)
      processNextQueuedMove()
    }

    root.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      root.removeEventListener('wheel', onWheel)
      if (animRafRef.current !== null) {
        cancelAnimationFrame(animRafRef.current)
      }
      if (wheelGestureTimerRef.current !== null) {
        clearTimeout(wheelGestureTimerRef.current)
      }
      animRafRef.current = null
      isAnimatingRef.current = false
      wheelGestureLockedRef.current = false
      wheelGestureTimerRef.current = null
      pendingDirectionsRef.current = []
    }
  }, [processNextQueuedMove])

  useEffect(() => {
    const root = mainRef.current
    if (!root) {
      return
    }

    const onScroll = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) {
        return
      }

      if (isAnimatingRef.current || syncRafRef.current !== null) {
        return
      }

      syncRafRef.current = window.requestAnimationFrame(() => {
        const closestIndex = getClosestIndex(root.scrollTop)
        currentIndexRef.current = closestIndex
        setActiveSection(sectionIds[closestIndex])
        syncRafRef.current = null
      })
    }

    root.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      root.removeEventListener('scroll', onScroll)
      if (syncRafRef.current !== null) {
        cancelAnimationFrame(syncRafRef.current)
      }
      syncRafRef.current = null
    }
  }, [getClosestIndex])

  return (
    <div className="app-shell">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main ref={mainRef} className="app-main">
        <ProfileSection />
        <ProjectsSection />
        <CareerSection />
        <div className="snap-dots" aria-label="Section slide navigation">
          {sectionIds.map((sectionId) => (
            <button
              key={sectionId}
              type="button"
              className={`dot-button ${activeSection === sectionId ? 'is-active' : ''}`}
              onClick={() => handleNavigate(sectionId)}
              aria-label={sectionLabels[sectionId]}
              aria-current={activeSection === sectionId ? 'true' : undefined}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
