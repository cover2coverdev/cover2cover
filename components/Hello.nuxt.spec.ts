// tests/components/SomeComponents.nuxt.spec.ts
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { it, expect, describe } from "vitest";
import Hello from "~/components/Hello.vue";

describe("Hello", () => {
  it("can render", async () => {
    await renderSuspended(Hello);
    expect(screen.getAllByTestId('hello-world')).toBeDefined();
  });

  it('has the text hello world', async () => {
    await renderSuspended(Hello);
    expect(screen.getByText('Hello World!')).toBeDefined();
  })
});
