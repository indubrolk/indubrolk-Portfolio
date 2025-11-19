// components/DownloadButton.jsx
export default function DownloadButton() {
  return (
    <a
      href="/CV.pdf"         // path relative to public/
      download="Indu-CV.pdf" // optional: custom download file name
      className="px-4 py-2 rounded bg-black text-white"
    >
      Download CV
    </a>
  );
}
