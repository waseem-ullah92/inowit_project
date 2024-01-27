
export default function ConsultationParagraph({ text, classes }: { text: string, classes?: string }) {
    return (
        <p className={`${classes} text-[#1b1469] mb-0`}>{text}</p>
    )
}