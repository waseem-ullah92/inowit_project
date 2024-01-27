export default function ServiceSubHeading({ text, propClasses }: { text: any, propClasses?: string }) {
    return (
        <h2 className={`serviceSubHeading ${propClasses}`}>{text}</h2>
    )
}