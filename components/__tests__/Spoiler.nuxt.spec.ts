import { mountSuspended } from "@nuxt/test-utils/runtime";
import { it, expect, describe } from "vitest";
import Spoiler from "~/components/Spoiler.vue";

describe("Spoiler", () => {
  it.concurrent("renders", async () => {
    const spoiler = await mountSuspended(Spoiler);
    expect(spoiler).toBeTruthy();
  });

  it.concurrent("hides spoiler content when hidden", async () => {
    const wrapper = await mountSuspended(Spoiler, { props: { hidden: true } , slots: {default: `<p>hi im spoiler</p>`}});
    expect(wrapper.text()).not.toContain("hi im spoiler");
  });

  it.concurrent("shows spoiler content when not hidden", async () => {
    const wrapper = await mountSuspended(Spoiler, { props: { hidden: false } , slots: {default: `<p>hi im spoiler</p>`}});
    expect(wrapper.text()).toContain("hi im spoiler");
  });

  it.todo('shows spoiler when clicked and hidden')
});
