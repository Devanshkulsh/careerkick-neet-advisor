export default function BottomBar() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#56b016]/25 bg-white px-4 py-5 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p>
          © {year} <span className="text-slate-500">All rights reserved.</span>
        </p>
        <p>
          Developed &amp; Managed by{" "}
          <a
            href="https://ntechzy.in"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#4b9914] transition hover:text-[#56b016]"
          >
            Ntechzy
          </a>
        </p>
      </div>
    </footer>
  );
}
