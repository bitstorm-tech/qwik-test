import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/nav/footer";

import Header from "~/components/nav/header";

export default component$(() => {
  return (
    <>
      <main class="flex flex-col">
        <section class="w-screen fixed top-0 bg-white">
          <Header />
        </section>
        <section class="flex-grow overflow-scroll my-12">
          <Slot />
        </section>
        <section class="w-screen fixed bottom-0 bg-white">
          <Footer />
        </section>
      </main>
    </>
  );
});
