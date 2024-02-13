import { mountSuspended } from "@nuxt/test-utils/runtime";
import { it, expect, describe } from "vitest";
import Spoiler from "~/components/Spoiler.vue";

describe("Spoiler", () => {
  it.concurrent("renders", async () => {
    const wrapper = await mountSuspended(Spoiler);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('.spoiler-text')).toBeDefined()
  });

  it.concurrent("hides spoiler content when hidden", async () => {
    const wrapper = await mountSuspended(Spoiler, {props: {hidden: true}, slots: {default: () => 'Hi im hidden'}})

    const spoiler = wrapper.find('[data-state="hidden"]');
    expect(spoiler).toBeDefined()

  });

  it.concurrent("shows spoiler content when not hidden", async () => {
    const wrapper = await mountSuspended(Spoiler, {props: {hidden: false}, slots: {default: () => 'Hi im hidden'}})

    const spoiler = wrapper.find('[data-state="visible"]');
    expect(spoiler).toBeDefined()
  });

  it.todo('shows spoiler when clicked and hidden')
});
