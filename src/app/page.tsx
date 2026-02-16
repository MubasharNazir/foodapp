import { InstallAppButton } from "@/components/InstallAppButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white font-sans dark:from-zinc-950 dark:to-black">
      <InstallAppButton />
      <main className="flex w-full max-w-2xl flex-col items-center gap-12 px-6 py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-orange-600 dark:text-orange-400">
            Food App
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Discover and order delicious food. A Progressive Web App that works
            offline and installs on your device.
          </p>
        </div>
        <p className="text-xl font-medium text-zinc-500 dark:text-zinc-400">
          Coming soon
        </p>
      </main>
    </div>
  );
}
