export default function ContentWritingCard({ text }: { text: string }) {
    return (
        <div className="contentWritingCard position-relative">
            <div className="blueCircle"></div>
            <h6>{text}</h6>
        </div>
    )
}