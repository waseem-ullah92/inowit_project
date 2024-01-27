export default function BannerHeading({ text, isBlue, isTop, isHeight, isLeft, propClasses }: { text: string, isBlue?: boolean, isTop?: boolean, isHeight?: boolean, isLeft?: boolean; propClasses?: string }) {
    const fontColor = isBlue ? "#1b1469" : "white";
    const topClass = isTop ? "TopHeading" : "";
    const lineHeight = isHeight ? "70px" : "1.5";
    const left = isLeft ? "left" : "center"
    return (
        <h1 className={`serviceBannerHeading ${propClasses} ${topClass}`} style={{ color: fontColor, lineHeight: lineHeight, textAlign: left }}>{text}</h1>
    )
}