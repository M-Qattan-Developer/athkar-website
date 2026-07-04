export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div className="absolute left-[-250px] top-40 h-[650px] w-[650px] rounded-full bg-[#23405b]/35 blur-[140px]" />

        <div className="absolute right-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-[#c6a15b]/20 blur-[140px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#16283d] blur-[180px]" />

      </div>
    </>
  );
}