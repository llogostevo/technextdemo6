import Script from "next/script"

export default function SaucyScriptsPage() {
  return (
    <div>
        <h2>Saucy Script</h2>
        {/* just an example */}
        <Script src="https://example.com/script.js" />
    </div>
  )
}
