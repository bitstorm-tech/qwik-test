import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const showMobileMenu = useSignal(false);
  return (
    <nav class="flex px-4 py-2 md:px-52 items-center border-b-[0.01rem] border-[#556368]">
      <div class="flex justify-between text-xl w-full">
        <div class="flex gap-6 items-end">
          <a href="/">
            <img
              loading="lazy"
              class="h-7"
              src="/images/logo.svg"
              alt="Logo Text"
            />
          </a>
          {/* <MemberStatus /> */}
        </div>
        <div class="flex cursor-pointer text-[#69828c] z-20">
          <button
            onClick$={() => (showMobileMenu.value = !showMobileMenu.value)}
          >
            {showMobileMenu.value ? "X" : "="}
          </button>
        </div>
      </div>
    </nav>
  );
});
