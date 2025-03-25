import {ModeToggle} from "@/components/theme-toggle"

export default function Home() {
  return (
    <div>
      <div className="flex justify-end p-4 absolute top-0 right-0">
          <ModeToggle/>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-2xl font-bold mb-4">
          Kartik Labhshetwar
        </div>
        <div className="text-lg">
          hi i am kartik labhshetwar
        </div>
      </div>
    </div>
    );
}
