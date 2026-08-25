/**
 * Pure-CSS replacement for the old three.js/@react-three globe. Same visual
 * role (a soft, slowly breathing gold glow + a scattering of stars behind
 * the hero text) at effectively zero bundle cost instead of ~900KB of
 * WebGL dependencies that were the main cause of a slow first load.
 */
export const AmbientGlow = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="ambient-stars absolute inset-0" />
    <div className="ambient-orb absolute top-1/2 left-1/2 w-[560px] h-[560px] rounded-full bg-noble-blue/30 blur-[110px]" />
  </div>
);
