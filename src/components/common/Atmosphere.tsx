export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="atmosphere-mesh absolute inset-0" />
      <div className="atmosphere-grid absolute inset-0 opacity-70 dark:opacity-90" />
      <div className="atmosphere-sweep" />
      <div className="atmosphere-orb atmosphere-orb-a" />
      <div className="atmosphere-orb atmosphere-orb-b" />
      <div className="atmosphere-orb atmosphere-orb-c" />
      <span className="atmosphere-particle atmosphere-particle-1" />
      <span className="atmosphere-particle atmosphere-particle-2" />
      <span className="atmosphere-particle atmosphere-particle-3" />
      <span className="atmosphere-particle atmosphere-particle-4" />
      <span className="atmosphere-particle atmosphere-particle-5" />
      <div className="atmosphere-noise absolute inset-0 opacity-[0.04] mix-blend-overlay dark:opacity-[0.08]" />
    </div>
  )
}
