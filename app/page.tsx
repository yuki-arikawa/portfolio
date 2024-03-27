import Head from './components/head';

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Head />
      <div className="h-[calc(100%-64px)] text-9xl font-black flex flex-col justify-center items-center">
        <h1 className='transition-opacity my-5'>YUKI ARIKAWA</h1>
        <h2 className='text-4xl font-normal'>Frontend Engineer</h2>
      </div>
    </main>
  );
}
