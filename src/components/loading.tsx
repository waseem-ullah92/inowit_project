import Image from "next/image";

// =====================================================================================================

export default function AppLoading() {
    return (
        <div className="fixed flex items-center justify-center w-full h-full top-0 left-0 bottom-0" style={{ zIndex: 9999 }}>
            <Image
                width={100}
                height={100}
                alt="Loading..."
                src="/images/loader.svg"
            />
        </div>
    );
}
