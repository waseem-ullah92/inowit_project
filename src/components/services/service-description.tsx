export default function ServiceCard({ children, noPadding }: { children: any, noPadding?: any }) {

    const padding = "pt-0 py-5";

    return (
        <>
            <div className={`${noPadding ? padding : "descriptionMain"}`}>
                <div className="container">
                    {children}
                </div>
            </div>
        </>
    )
}