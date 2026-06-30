export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
        <p className="text-slate-400 text-sm font-medium">Loading...</p>
      </div>
    </div>
  )
}
