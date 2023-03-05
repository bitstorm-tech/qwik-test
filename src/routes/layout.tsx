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
        <section class="flex-grow overflow-scroll">
          <Slot />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
});
