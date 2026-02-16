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
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-white transition-colors hover:bg-orange-600 md:w-auto md:px-8"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy to Vercel
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-300 px-6 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800 md:w-auto md:px-8"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
