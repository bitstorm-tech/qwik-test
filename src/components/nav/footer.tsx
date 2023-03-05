import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="flex justify-between items-center px-4 h-12 border-t-[0.01rem] border-t-[#556368] text-[#69828c]">
      <a href="/">
        Home
        {/* <HomeIcon active={$navigationStore === "home"} /> */}
      </a>
      <a href="/top">
        Top
        {/* <TopIcon active={$navigationStore === "top"} /> */}
      </a>
      <a href="/map">
        Map
        {/* <MapIcon active={$navigationStore === "map"} /> */}
      </a>
    </footer>
  );
});
