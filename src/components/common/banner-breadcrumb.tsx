import Link from "next/link";

export default function BannerBreadcrumb({ text1, text2, text3, }: { text1: string, text2: string, text3?: string }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-3">
                <li className="breadcrumb-item "><Link href="/home">{text1}</Link></li>
                <li className="breadcrumb-item"><span>{text2}</span></li>
                {text3 && (
                    <li className="breadcrumb-item active" aria-current="page">{text3}</li>
                )}
            </ol>
        </nav>
    )
}