export default function Footer() {
    return (
        <footer className="w-full py-4 sm:py-6">
            <div className="flex flex-col items-start space-y-1">
                <p className="text-sm sm:text-md text-neutral-600 dark:text-neutral-400 font-light">
                    © {new Date().getFullYear()} Kartik Labhshetwar
                </p>
            </div>
        </footer>
    );
}