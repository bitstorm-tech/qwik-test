import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/nav/footer";

import Header from "~/components/nav/header";

export default component$(() => {
  return (
    <>
      <main class="max-h-screen flex flex-col">
        <section>
          <Header />
        </section>
        <section class="flex-grow overflow-scroll mb-12">
          <Slot />
        </section>
        <section class="w-screen fixed bottom-0">
          <Footer />
        </section>
      </main>
    </>
  );
});
